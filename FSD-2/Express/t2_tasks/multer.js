expr = require('express')
app = expr()
const multer = require('multer')
app.use(expr.static('./',{index:'form.html'}))
var storage = multer.diskStorage({
    destination:'./lju',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
var upload = multer({storage:storage})
app.post('/upload-file',upload.single('file'),(req,res)=>{
    const file = req.file
    if(file){
        res.send(`
            <h1>${file.originalname} has been uploaded successfully!</h1>
            at ${file.destination}
            `)
    }
})
app.listen(5000)