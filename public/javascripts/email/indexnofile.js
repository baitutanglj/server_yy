const nodemailer = require('nodemailer')
const path = require('path')

function emailcom(toemail,subject,text,resultPath){
    const filename = path.basename(resultPath)
    const mailer = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        pool: true,
        secure: true,
        auth: {
            user: 'baitutang2919@163.com',
            pass: 'UFYEPDESDQYWYDJR'
        },
    })

    const sendMailOptions = {
        from: 'baitutang2919@163.com',
        to: toemail,
        subject: subject,
        text: text,
        attachments:[
            {
                filename : filename,
                path: resultPath
            },
        ]

    }

    mailer.sendMail(sendMailOptions, (error, info) => {
        if (error) {
            return console.log('send email error:'+error);
        }
        console.log(`Message: ${info.messageId}`);
        console.log(`sent: ${info.response}`);
    });
}



module.exports = emailcom



