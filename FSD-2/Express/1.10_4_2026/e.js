var expr = require('express')
var app = expr()
app.get('/user/:userid/test/:result', (req, res) => {
    res.send(req.params)
})
app.listen(1234)
