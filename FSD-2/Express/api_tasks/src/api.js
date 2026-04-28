expr = require('express')
data = require('./MOCK_DATA.json')
const router = expr.Router()

router.get('/user',(req,res)=>{
    res.json(data)
})
router.get('user/:id',(req,res)=>{
    id = req.params.id
    user = data.find((u)=> id == u.id)
    if(!user){
        return res.status(404).json({'message':'User not found'})
    }
    res.json(user)

})
router.get('/emails',(req,res)=>{
    email = []
    data.forEach(x => {
        
        email.push(x.email)
        
    });
    res.json(email)

})
module.exports = router