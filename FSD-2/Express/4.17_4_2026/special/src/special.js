expr = require('express')
app = expr()
app.use(expr.urlencoded({ extended: true }))
app.use(expr.static('../public', { index: 'a.html' }))
app.get("/login", (req, res,next) => {
    console.log(req.url)
    res.set("content-type", "text/html");
    res.write(`<center><h1>Welcome ${req.url.name}</h1>`)
    res.write(`<center><h2>Your email id is  ${req.url.email}</h2>`)
    res.write(`<center><h4>You can subscribe to get daily updates</h4>`)
    next()
})
app.get("/login", (req, res, next) => {
    if (req.query.newsletter && req.query.newsletter == "on") {
        res.write("<h3>Thank you for your subcsription</h3><a href='/'>Logout</a>");
    } else {
        res.write("<h3>You can subcribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
    res.send()
    next();
});
app.get("/subscribe", (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h3>Thank you for your subcsription</h3></center><a href='/'>Logout</a>");
    res.send();
});
app.listen(1001);