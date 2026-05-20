expr = require('express')
app = expr()
app.use(expr.urlencoded({extended:true}))
let name;
app.get('/',(req,res)=>{
    res.send(404)
})
app.listen(5000)
