expr = require('express')
app = expr()
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public', { index: 'form.html' }))
app.use(expr.urlencoded({ extended: true }))
app.post('/submit-feedback', (req, res) => {
    const { name, email, message, rating } = req.body
    const fb={name,email,message,rating}
    res.cookie('feedback',fb,{maxAge:10000})
    res.send(`Thank you for your feedback! <a href='/feedback-details'>Show feedback</a>`)
})
app.get('/feedback-details', (req, res) => {
    data = req.cookies.feedback
    if (data) {
        res.send(`<h2>Feed back </h2>
            <p>Name : ${data.name}</p>
            <p>email : ${data.email}</p>
            <p>message : ${data.message}</p>
            <p>Rating : ${data.rating}</p>`)
    }
    else {
        res.send("No feedback available")
    }
})
app.listen(5677)