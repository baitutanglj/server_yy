const express = require('express')
const path = require('path')
const mkdirp = require('mkdirp')
const shortid = require('shortid');
const router = express.Router()
const workerProcess = require('../public/javascripts/process')

router.get('/',function(req, res){
    var params = req.query
    console.log('params:'+JSON.stringify(params));
    const sdfname = path.basename(params.sdfPath,'.sdf')
    const modelname = path.basename(params.modelPath,'.pt')
    const basepath = path.dirname(params.sdfPath)
    const dir = path.join(basepath,sdfname+'_hybrid')// /mnt/software/SyntaLinker_Working//20201208/LXR_clean_positive_hybrid
    mkdirp.sync(dir)
    const resultPath = dir+'/match_'+shortid.generate()+'_hybrid.txt'
    const sendemail = '/mnt/software/server/info.txt'
    var text = `运行完成，相关参数为:
        sdfName:${path.basename(params.sdfPath)},
        HBD:${path.basename(params.HBD)},
        HBA:${path.basename(params.HBA)},
        MW:${path.basename(params.MW)},
        rings:${path.basename(params.rings)},
        linker_len:${params.len},
        HEV:${params.HEV},
        batch_size:${params.batch_size},
        max_length:${params.max_length},
        beam_size:${params.beam_size},
        n_best:${params.n_best},
        resultPath:${resultPath}`
    console.log(resultPath);
    if(params.ifOwnModel=='true'){
        text = `${text},
        modelName:${path.basename(params.modelPath)}`
        var pid = workerProcess(`bash hybrid.sh ${params.sdfPath}\
     ${params.modelPath}\
     ${params.len}\
     ${params.HEV}\
     ${params.batch_size}\
     ${params.max_length}\
     ${params.beam_size}\
     ${resultPath}\
     ${params.HBD}\
     ${params.HBA}\
     ${params.MW}\
     ${params.rings}\
     ${params.n_best}`,
            params.email,'SyntaLinkerHybrid',text)
    } else {
        text = `${text},
        modelName:${path.basename(params.selected_model)}`
        var pid = workerProcess(`bash hybridOther.sh ${params.sdfPath}\
     ${params.selected_model}\
     ${params.len}\
     ${params.HEV}\
     ${params.batch_size}\
     ${params.max_length}\
     ${params.beam_size}\
     ${resultPath}\
     ${params.HBD}\
     ${params.HBA}\
     ${params.MW}\
     ${params.rings}\
     ${params.n_best}`,
            params.email,'SyntaLinkerHybrid',text)
    }

    res.send({pid:pid})
    // res.send({form:params});

})
module.exports = router
