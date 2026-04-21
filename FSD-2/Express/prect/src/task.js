const { log } = require('console');
const {buildApp} = require('./app');
const path = require("path");

const app = buildApp()
USER={
    username:"admin",
    password:"admin123"
}
app.post('/login-data',(req,res)=>{
    const {uname,password} = req.body;
    if(uname && password && uname === USER.username && password === USER.password){
        res.cookie('username', uname,{maxAge:1000*10})
        res.cookie('isLoggedIn', true,{maxAge:1000*10})
        res.redirect('/home')
    } else {
        res.status(401).send("Unauthorized")
    }
})
app.get('/home', (req, res) => {
    if(req.cookies.isLoggedIn){
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
          } else {
              res.redirect('/')
          }   
})
app.get('/about',(req,res)=>{
   if(req.cookies.isLoggedIn){
    res.sendFile(path.join(__dirname, "..", "public", "about.html"));
    } else {  
        res.redirect('/')
    }
});
app.get('/contact',(req,res)=>{
   if(req.cookies.isLoggedIn){
    res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
    } else {
        res.redirect('/') 
    }
});
app.listen(1001)
