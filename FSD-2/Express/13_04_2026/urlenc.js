const { urlencoded } = require('express')


expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
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
        uname: <input type="text" name='uname'>
        age : <input type="text" name="age">
         <button type="submit">Submit</button>
    </form>
</body>
</html>

        `)
})
app.listen(5000, () => { })
app.post('/data', (req, res) => {
    name = req.body.uname
    age = req.body.age
    res.send('welcome ' + name + ' with age ' + age)
})
app.listen(5000, () => { })