var replaceSmi = function (smi) {
    smi = smi.replace(/\(/g,'\\\(')
    smi = smi.replace(/\)/g,'\\\)')
    return smi
}
module.exports = replaceSmi
