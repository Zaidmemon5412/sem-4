const { urlencoded } = require('express')

expr = require('express')
app = expr()
jwt = require('jsonwebtoken')
bcrept= require('bcrypt')
cp = require('cookie-parser')
nm = require('nodemailer')
path = require('path')
app.use(cp())
app.use(expr.json())
app.use(urlencoded({extended:true}))
app.use(expr.static('../public',{index:'form.html'}))

app.post('/login',(req,res)=>{
    const {uname , email} = req.body
    if(!uname || !email){
        req.status(404).send('Your not authenticated !!!')
    }else{
        const token = jwt.sign({email},'secretkey')
        res.cookie("token",token)
        res.redirect('/feed-back')   
    }
})
app.get('/feed-back',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','feedback.html'))
})
app.post('/feedback',(req,res)=>{
    const {name , feedbackType , comments} = req.body
    trans = nm.createTransport({
        host : 'smtp.gmail.com',
        port: 587,
        auth:{
            user: 'Your Email',
            pass:'app password'
        }
    });
    var mailoption = {
        from: 'Your Email',
        to: req.body.email,
        subject: 'Feedback Received',
        html: `<p>Dear ${name},</p>
        <h2>Thank you for your ${feedbackType} feedback!</h2>
        <p>Your comments: ${comments}</p>
        <p>We appreciate your input and will use it to improve our services.</p>`
    }

    trans.sendMail(mailoption, (err, info)=>{
        if (err) throw err
        else{
            res.send('Feedback sent successfully')
        }
    })
})
app.listen(5050,()=>{
    console.log('Server Started...');
});