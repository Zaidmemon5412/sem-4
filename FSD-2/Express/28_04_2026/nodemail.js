expr = require('express')
nm = require('nodemailer')
path = require('path')

app = expr()
var trans = nm.createTransport({
    host : 'smtp.gmail.com',
    port: 587,
    auth:{
        user:'Your Email',
        pass:'app pasword'
    }
})
var mailoption = {
    from: 'Your Email',
    to:'receiver Email',
    subject:'This is Deomo only',
    html:'<h2>Hello I am Faizan Memon,This is your file</h2>',
    attachments:[
        {
            filename:'files.pdf',
            pathname:'./files.pdf'
        }
    ]
}
trans.sendMail(mailoption,(err,info)=>{
    if(err) {throw err }
    else{
        console.log(info);
    }
})
