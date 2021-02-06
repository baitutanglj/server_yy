const express = require('express')
const path = require('path')
const mkdirp = require('mkdirp')
const router = express.Router()
const mkdirsSync = require('../public/javascripts/mkdirs')
const workerProcess = require('../public/javascripts/process')

router.get('/',function(req, res){
    // res.header("Access-Control-Allow-Origin","http://localhost:8002")
    var params = req.query
    console.log('params:'+JSON.stringify(params));
    const sdfname = path.basename(params.sdfPath,'.sdf')// LXR_clean_positive
    const basepath = path.dirname(params.sdfPath)// /mnt/software/SyntaLinker_Working//20201208
    const dir = path.join(basepath,sdfname+'_train')// /mnt/software/SyntaLinker_Working//20201208/LXR_clean_positive_train
    mkdirsSync(dir)
    const step = parseInt(params.train_steps/params.save_checkpoint_steps)*params.save_checkpoint_steps
    const resultPath = path.join(dir,sdfname+'_model_step_'+step+'.pt')
    const sendemail = '/mnt/software/server/info.txt'
    console.log(resultPath);
    var text = `运行完成，相关参数为:
         sdfName:${path.basename(params.sdfPath)},
         HBD:${path.basename(params.HBD)},
         HBA:${path.basename(params.HBA)},
         MW:${path.basename(params.MW)},
         rings:${path.basename(params.rings)},
         linker_len:${params.len},
         HEV:${params.HEV},
         train_steps:${params.train_steps},
         save_checkpoint_steps:${params.save_checkpoint_steps},
        resultPath:${resultPath}`
    // console.log('form:'+JSON.stringify(params));
    if(params.isTransfer=='true' && params.ifOwnModel=='true'){
        text = `${text},
        modelName:${path.basename(params.modelPath)}`
        var pid = workerProcess(`bash mytraintrasfer.sh ${params.sdfPath}\
         ${params.HBD} ${params.HBA} ${params.MW} ${params.rings}\
          ${params.train_steps} ${params.save_checkpoint_steps} ${params.batch_size}\
           ${resultPath} ${params.modelPath} ${params.len} ${params.HEV}`,
            params.email,'SyntaLinker train',text)
    }else if(params.isTransfer=='true' && params.ifOwnModel=='false'){
         text = `${text},
         selected_model:${params.selected_model}`
        var pid = workerProcess(`bash mytraintrasferOther.sh ${params.sdfPath}\
         ${params.HBD} ${params.HBA} ${params.MW} ${params.rings}\
          ${params.train_steps}\ ${params.save_checkpoint_steps} ${params.batch_size}\
           ${resultPath} ${params.selected_model} ${params.len} ${params.HEV}`,
            params.email,'SyntaLinker train',text)
    }else{
        var pid = workerProcess(`bash mytrain.sh ${params.sdfPath}\
         ${params.HBD} ${params.HBA} ${params.MW} ${params.rings}\
          ${params.train_steps} ${params.save_checkpoint_steps} ${params.batch_size}\
           ${resultPath} ${params.len} ${params.HEV}`,
            params.email,'SyntaLinker train',text)
    }
    res.send({pid:pid})
    // res.send({form:params});

})
module.exports = router
