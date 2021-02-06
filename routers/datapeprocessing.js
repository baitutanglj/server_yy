const express = require('express')
const router = express.Router()
const workerProcess = require('./public/javascript/process')

app.get('/train',function(req, res){
    var params = req.query
    var filename = params.filePath.lastIndexOf('/')
    var filedir = params.filePath.substr(0,filename)
    var text = `数据预处理运行完成，结果存储路径为：/mnt/software/SyntaLinker_Working/${filedir}`
    var pid = workerProcess(`bash datapre.sh ${params.params.filePath} `,
        '/mnt/home/linjie/projects/SyntaLinker_rt', params.email,'SyntaLinker train',text)
    res.send({pid:pid})
    res.send('trainRouter.js进入路由/train');


})
module.exports = router
