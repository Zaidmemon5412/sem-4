var expr = require('express')
var app = expr()
app.get('/:id', (req, res) => {
    res.send(req.params)
})
app.listen(1234)
