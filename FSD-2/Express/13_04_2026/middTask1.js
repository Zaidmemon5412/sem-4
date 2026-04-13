expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
validation = function (req, res, next) {
    if (req.body.uname === 'admin') {
        console.log('Addmin validated');
        next()
    }
    else {
        res.send(`<p style='color : "red"> You are not authenticated....</>`)
    }
}
welcom = function (req, res, next) {
    console.log('Welcome user ');
    next()

}
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/data" method="post">
        <fieldset> <legend>singup</legend>
        uname: <input type="text" name='uname'>
        password : <input type="password" name="password">
        <button type="submit">Submit</button>
        </fieldset>
    </form>
</body>
</html>

<h1>Do not copy code...</h1>`)

})
app.use('/data', validation, welcom)
app.post('/data', (req, res) => {
    res.send(`<h1> Welcome </h1>`)

})
app.listen(5000)