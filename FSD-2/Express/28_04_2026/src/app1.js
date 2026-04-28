expr = require("express");
nm = require("nodemailer");
app = expr();
app.use(expr.static("../public", { index: "form.html" }));
app.use(expr.json());
app.use(expr.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'Your Email',
      pass: "app password",
    }
  });
  var mailoption = {
    from: 'Your Email',
    to:req.body.uname,
    subject:'This is Deomo only',
    html:'<h2>Hello I am Faizan Memon,This is your file</h2>'
  }
  trans.sendMail(mailoption,(err,info)=>{
    if(err) throw err
    else{
        res.send(`Mail sent to ${req.body.uname} successfuly`)
    }
  })
});
app.listen(5252,()=>{
    console.log('Server Started...');
    
})
