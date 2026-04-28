expr = require('express')
app = expr()
app.use(expr.json())
const uroute = require('./api')

app.use('/users',uroute)
app.listen(5000)