const express = require('express')
const path = require('path')
const router = express.Router()
const shortid = require('shortid');
const sd = require('silly-datetime');
const mkdirsSync = require('../public/javascripts/mkdirs')
const workerProcess = require('../public/javascripts/process')
const replaceSmi = require('../public/javascripts/process/replaceSmi')

router.get('/',function(req, res){
    var params = req.query
    console.log('params:'+JSON.stringify(params));
    var firstsmi = replaceSmi(params.firstsmi)
    var secondsmi = replaceSmi(params.secondsmi)
    const sendemail = '/mnt/software/server/info.txt'
    var text = `运行完成，相关参数为:
        firstsmi:${params.firstsmi},
        secondsmi:${params.secondsmi},
        minlen:${params.minlen},
        maxlen:${params.maxlen},
        beam_size:${params.beam_size},
        n_best:${params.n_best}
        random_num:${params.random_num}`

    if(params.ifOwnModel=='true' && params.modelPath!=''){
        const modelname = path.basename(params.modelPath,'.pt')
        const basepath = path.dirname(params.modelPath)
        const dir = path.join(basepath,modelname+'_Sampling')// /mnt/software/SyntaLinker_Working//20201209/ChEMBL_model_average_sampling
        mkdirsSync(dir)
        const resultPath = `${dir}/match_${params.minlen}_${params.maxlen}_${modelname}.txt`
        text = `${text},
        modelPath:${params.modelPath},
        resultPath:${resultPath}`
        console.log(resultPath);
        var pid = workerProcess(`bash mysampling.sh ${firstsmi}.${secondsmi}\
         ${params.minlen}\
         ${params.maxlen}\
         ${params.beam_size}\
         ${params.modelPath}\
         ${resultPath}\
         ${params.random_num}\
         ${params.n_best}`,
            params.email,'SyntaLinker Sampling',text)
    }
    else{
        const modelname = path.basename(params.selected_model,'.pt')
        const day = sd.format(new Date(),'YYYYMMDD')
        const dir = path.join("/mnt/software/SyntaLinker_Working",day,shortid.generate()+'_SelectedModel_Sampling')
        mkdirsSync(dir)
        var resultPath = `${dir}/match_${params.minlen}_${params.maxlen}_${modelname}.txt`
        text = `${text},
        selected_model:${params.selected_model},
       resultPath:${resultPath}`
        console.log(resultPath);
        var pid = workerProcess(`bash mysamplingOther.sh ${firstsmi}.${secondsmi}\
         ${params.minlen}\
         ${params.maxlen}\
         ${params.beam_size}\
         ${params.selected_model}\
         ${resultPath}\
         ${params.random_num}\
         ${params.n_best}`,
            params.email,'SyntaLinker Sampling',text)
    }
    res.send({pid:pid})
    // res.send({form:JSON.stringify(params)});

})
module.exports = router
