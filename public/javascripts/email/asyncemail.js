const _ = require('lodash')
const nodemailer = require('nodemailer')

async function main () {
    const mailer = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        pool: true,
        secure: true,
        auth: {
            type: 'login',
            user: 'baitutang2919@163.com',
            pass: 'UFYEPDESDQYWYDJR'    // 如果开启了客户端授权码，则这里需要填写客户端授权码
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const sendMailOptions = {
        from: 'baitutang2919@163.com',
        to: '2919588049@qq.com',
        subject: '测试主题',
        html: '测试内容'
    }

    const result = await mailer.sendMail(sendMailOptions)

    if (!_.startsWith(_.get(result, 'response'), '250 Mail OK')) {
        return Promise.reject(new Error('Send mail fail'))
    }

    return result.response
}

main()
