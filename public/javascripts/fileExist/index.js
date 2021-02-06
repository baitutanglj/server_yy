const fs = require('fs')
const mkdirp = require('mkdirp')

function deleteFolderRecursive(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};


/* 判断文件是否存在的函数
*@path_way, 文件路径
 */
function isFileExisted(path_way) {
    return new Promise((resolve, reject) => {
        fs.access(path_way, (err) => {
            if (err) {
                mkdirp.sync(path_way);
                console.log("文件夹不存在，已新创建");
                // reject(false);
            } else {
                resolve(true);
                console.log('文件夹已存在');
                deleteFolderRecursive(path_way)
                mkdirp.sync(path_way);
                console.log("文件夹已删除，已新创建");
            }
        })
    })
};

module.exports = isFileExisted
