const expr = require('express')
const mg  = require('mongoose')
const cors = require('cors')

const app = expr()

app.use(cors())
app.use(expr.json())
mg.connect('mongodb://127.0.0.1:27017/stack1') .then(()=>{console.log("Connection Success")})

const userSchema = new mg.Schema({username:String})

const User = new mg.model('empname',userSchema)

app.post('/signup',async (req,res)=>{
    try {
            const {username} = req.body
            const newuser = new User({username})
            await newuser.save()  
            res.send()
        
    } catch (error) {
        console.error(error)
    }
})
app.listen(5000)
