const http = require('http')
http.createServer((req, res) => {
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>Welcome to Priyen sir's class</h1>")
            res.end()
    },10000)
}).listen(3010)
