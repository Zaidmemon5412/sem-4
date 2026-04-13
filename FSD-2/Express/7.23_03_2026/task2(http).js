const http = require('http')
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello Home</h1>')
        res.end()
    }
    else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello About</h1>')
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("Page not found")
    }

}).listen(3009)
