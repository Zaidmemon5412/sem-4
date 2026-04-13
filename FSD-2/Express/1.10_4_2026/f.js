var expr = require('express')
var app = expr()
app.get('/login/:uname', (req, res) => {
    res.send("Welcome "+req.params.uname)
})
app.listen(1234)
