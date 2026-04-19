expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
app.use(expr.static('../public'))
app.use(expr.static('../public', { index: 'a.html' }))
app.post("/process-post", (req, res) => {
    console.log(req.body)
    res.write(`<p style="color : red;"> ${req.body.firstname} </p>`)
    res.write(`<p style="color : green;"> ${req.body.password} </p>`)
    res.write(`<p style="color : black;"> ${req.body.r1} </p>`)
    res.send()
})

app.listen(1010)