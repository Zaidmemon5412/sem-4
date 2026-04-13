var expr = require('express')
var app = expr()
data = { name: 'xyz', age: 24 }
app.get('/', (req, res) => {
    // res.write(JSON.stringify(data))
    res.write(data.age+" ")
    res.send()
    // res.json(data.age)

})
app.listen(5006)