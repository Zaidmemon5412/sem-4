http = require('http')
http.createServer((req, res) => {
    setTimeout(() => {
        res.write("Welcome Student")
            res.end()
    },5000)
}).listen(5006)
