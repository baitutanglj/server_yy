// const test1=require('./replaceSmi')
// var newSmi = test1("CCc(c)nn(F)")
// console.log(newSmi);
const path = require('path')
const mkdirp = require('mkdirp')
const sd = require('silly-datetime');
const day = sd.format(new Date(),'YYYYMMDD')
const dir = path.join("/mnt/software/SyntaLinker_Working",'2020','s_sampling')// /mnt/software/SyntaLinker_Working//20201208_sampling
mkdirp.sync(dir)
