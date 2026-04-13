expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
cb = function (req, res, next) {
    req.name = 'samil'
    console.log('I am adding name of student ');
    next()
}
cb1 = function (req, res, next) {
    req.subject = ['Fsd-2', 'Dm', 'python', 'Toc']
    console.log('I am adding subject');
    next()
}
cb2 = function (req, res, next) {
    req.mark = [12, 23, 11, 20]
    console.log('I am adding marks');
    next()

}
app.use(cb, cb1, cb2)
app.get('/', (req, res) => {
    console.log(' I am in get route');
    res.send(`Name : ${req.name} \n , 
              Subject : ${req.subject} \n , 
              Marks : ${req.mark}`)

})
app.listen(5000)