fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello</h1><img src="a.png">')
        res.end()
    }
    else if (req.url === "/a.png") {
        data = fs.readFileSync("a.png")
        res.writeHead(200, { 'Content-Type': 'image/png' })
        res.end(data)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("Page not found")
    }

}).listen(3000)
