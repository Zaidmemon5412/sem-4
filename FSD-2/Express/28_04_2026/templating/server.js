expr = require('express')
app = expr()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('file',{name:'psp'})

})
app.listen(5000,()=>{
    console.log('Server started');
    
})