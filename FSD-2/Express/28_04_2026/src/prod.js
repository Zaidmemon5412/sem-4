expr = require("express");
nm = require("nodemailer");
app = expr();
app.use(expr.static("../public", { index: "product.html" }));
app.use(expr.json());
app.use(expr.urlencoded({ extended: true }));
app.post("/order", (req, res) => {
    const {product , date} = req.body
  trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "Your Email",
      pass: "app Password",
    }
  });
  var mailoption = {
    from: 'Your Email',
    to:'receiver Email',
    subject:'  Product info ',
    html:`<p>Dear client</p>
    <h2>
    Thanks for your ordering <h1>Product Name: ${product} from out site.</h1></h2>
    <h1>Date : ${date}</h1>`
  }
  trans.sendMail(mailoption,(err,info)=>{
    if(err) throw err
    else{
        res.send(`Mail sent successfuly`)
    }
  })
});
app.listen(5252,()=>{
    console.log('Server Started...');
    
})
