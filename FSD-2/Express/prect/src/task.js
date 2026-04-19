const {buildApp} = require('./app');
const path = require("path");
cp = require('cookie-parser')


const app = buildApp()
app.use(cp())
app.get('/home', (req, res, next) => {
    if(req.query.password && req.query.password == 'admin123'){
        res.cookie('username', req.query.uname)
        res.cookie('isLoggedIn', true)
        next()
    } else {
        res.status(401).send("Unauthorized")
    }
})

app.get('/home',(req,res)=>{
    if(req.cookies.isLoggedIn){
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
    } else {
        res.status(401).send("Unauthorized")
    }
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, "..", "public", "about.html"));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
});
app.listen(1001)
