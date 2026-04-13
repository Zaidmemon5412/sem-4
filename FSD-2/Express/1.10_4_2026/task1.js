var expr = require('express')
var app = expr()
ap = [{ "name": "abc", "age": 20 },
    { "name": "def", "age": 25 },
    { "name": "ghi", "age": 30 }
]
app.get('/', (req, res) => {
    res.set('Content-type', 'text/html')
    res.send(ap)
})

app.get('/sort', (req, res) => {
    c = ap.sort((a, b) => b.age - a.age)
    for (let i of c) {
        res.write("<h1>"+i.name+"="+i.age+"</h1>")
    }
})
app.listen(1002)