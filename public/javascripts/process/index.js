const child_process = require('child_process')
const emailcom = require('../email')
const wokrPath = '/mnt/home/linjie/projects/SyntaLinker_rt'
function workerProcess(mycmd,toemail,subject,text) {
    var exec = child_process.exec(
        mycmd,
        {cwd:wokrPath},
        function( error, stdout, stderr) {
            console.log('pid:' + exec.pid);
            if (error) {
                console.log(error.stack)
                console.log('Error code: ' + error.code)
                console.log('Signal received: ' + error.signal)
            }
            console.log('stdout: '+stdout);
            emailcom(toemail, subject, text)
        }
    )
    exec.on('exit', function(code) {
    })
    return exec.pid
}

module.exports = workerProcess
