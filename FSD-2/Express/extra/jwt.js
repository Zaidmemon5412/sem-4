// authentication mean to verify the identity of a user or system  like login and password

// authorization mean to determine what resources a user or system is allowed to 
// access after authentication like role based access control 

// authentication is a process of verifying identity 
// authorization is a process of granting permissions to access resources

expr = require('express')
app = expr()
jwt = require('jsonwebtoken')
app.use(expr.json())
app.use(expr.urlencoded({ extended: true }))
const cp = require('cookie-parser')
app.use(cp())
const SECRET_KEY = "mysecretkey"
app.get('/',(req,res)=>{
    res.send(`<form action="/login-data" method="post">
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
</form>`)
})
app.post('/login-data',(req,res)=>{
    const {email,password} = req.body;
    let token = jwt.sign({email},SECRET_KEY)
    res.cookie('token',token,{httpOnly:true,maxAge:1000*20})
    res.redirect('/home')
})
app.get('/home',(req,res)=>{
    const token = req.cookies.token
    if(token){
        try {
            const decoded = jwt.verify(token, SECRET_KEY)
            res.send(`Welcome ${decoded.email}`)
        } catch (err) {
            res.status(401).send("Invalid token")
        }   
    } else {
        res.status(401).send("Unauthorized")
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})