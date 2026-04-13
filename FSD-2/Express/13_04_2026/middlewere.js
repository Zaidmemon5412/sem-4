expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
cb = function (req, res, next) {
    console.log('I am CB');
    next()
}
cb1 = function (req, res, next) {
    console.log('I am in CB1');
    res.write(' <h1> hello</h1>')
    next()

}
app.use('/ee', cb, cb1)
app.get('/ee', (req, res) => {
    res.write(`
        <h1>Do not copy code...</h1>
        `)
    res.send()

})
app.listen(5000)