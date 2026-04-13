var expr = require('express')
var app = expr()
app.get('/', (req, res) => {
    res.set('Content-type', 'text/html')
    res.write('<h1>Hello Samil</h1>')
    // res.send("How r u?")
    res.send()

})
// app.listen(5006, '0.0.0.0', () => { console.log('Server connected') })
app.listen(5006, () => { console.log('Server connected') })
