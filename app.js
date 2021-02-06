const express = require('express')
const bodyParser = require('body-parser')
const workerProcess = require('./public/javascripts/process')
// const homeRouter = require('./routers/index')
const uploadRouter = require('./routers/upload')
const trainRouter = require('./routers/train')
const samplingRouter = require('./routers/sampling')
const hybridRouter = require('./routers/hybrid')
//创建一个服务器
const app = express()
//设置需要使用模板
app.engine('html', require('express-art-template'))
//设置模板目录
app.set('views', 'dist')
//托管静态资源
app.use('/', express.static('dist'))
//给req.body赋值
app.use(bodyParser.urlencoded())
app.all('*', function(req, res, next) {//允许全部跨域
    //允许的header的类型
    res.header("Access-Control-Allow-Headers", "*");
    //允许跨域的域名，*代表任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*")
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.use('/',homeRouter)
app.use('/upload',uploadRouter)
app.use('/train',trainRouter)
app.use('/sampling',samplingRouter)
app.use('/hybrid',hybridRouter)


app.listen(8080, () => console.log('http://localhost:8080 server start'))
module.exports = app
