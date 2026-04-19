expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
app.use(expr.static('../public'))
app.use(expr.static('../public', { index: 'a.html' }))
app.get('/calc', (req, res) => {
    console.log(req.query)
    n1 = parseInt(req.query.n1)
    n2 = parseInt(req.query.n2)
    if (n1 < 0 | n2 < 0) {
        res.write("Enter positive  numbers")
    }
    else {
        if (req.query.formula === "addition") {
            ans = n1 + n2
            res.write("Addition=" + ans)
        }
        else if (req.query.formula === "subtraction") {
            ans = n1 - n2
            res.write("Subtraction=" + ans)
        }
        else if (req.query.formula === "multi") {
            ans = n1 * n2
            res.write("Multiplication=" + ans)
        }
        else if (req.query.formula === "div") {
            ans = n1 / n2
            res.write("Division=" + ans)
        }
        else {
            res.write("Formula not selected")
        }
    }
    res.send()
})
app.listen(1010)
