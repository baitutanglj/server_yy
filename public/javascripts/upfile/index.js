const multer = require('multer')
const sd = require('silly-datetime');
const path = require('path');
const mkdirp = require('mkdirp')
const shortid = require('shortid');
const fs = require('fs')
const mkdirsSync = require('../mkdirs')
// const { v4: uuidv4 } = require('uuid');



const uptools = {
    multer(){
        var storage = multer.diskStorage({
            //配置上传目录
            destination: (req, file, cb)=> {
                //1获取当前日期，eg：20201201
                //2按照日期生成文件存储目录
                const day = sd.format(new Date(),'YYYYMMDD')
                const dir = path.join("/mnt/software/SyntaLinker_Working",day)
                //mkdirp是一个异步方法
                // mkdirp.sync(dir)
                mkdirsSync(dir)
                cb(null, dir)//上传之前目录必须存在
            },
            //修改上传后的文件名
            filename: function (req, file, cb) {
                // cb(null, Date.now()+'-'+file.originalname)
                cb(null, shortid.generate()+'_'+file.originalname)
            }
        })
        var upload = multer({ storage: storage })
        return upload
    }
}
module.exports = uptools;
