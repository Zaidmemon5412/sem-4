var expr = require('express')
var app= expr()

app.use(expr.json())
const logging= function (req,res,next){
    console.log('LOGGING done');
    next()
}
app.use(logging)
const auth= function (req,res,next){
    console.log('authentication done');
    next()
}
app.use(auth)
const validation= function (req,res,next){
    console.log('validatoin...');
    
    res.send(`page not found...`)
    // next()
}
app.use(validation)

app.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: rgb(43, 32, 62); color: aliceblue;">
    <div style=" background-color: #300cff; padding: 10px;"> <p style="display: inline; color: rgb(165, 244, 38);">Home</p> About Info Contact-Us</tt></div>
    <h2>This Is Home Page</h2>
    <h3>Kese ho Lala</h3>
</body>
</html>`)
})
app.listen(5000,()=>{
    console.log('Server started at port 5000');
    
})