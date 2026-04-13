var expr = require('express')
var app = expr()
app.get('/', (req, res) => {
    res.set('Content-type', 'text/html')
    res.send("How r u?")
})
app.get('/about', (req, res) => {
    res.send("About page")
})
// app.listen(5006, '0.0.0.0', () => { console.log('Server connected') })
app.listen(5678, () => { console.log('Server connected') })
