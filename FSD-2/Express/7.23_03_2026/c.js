const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' })
    res.write('<h1>Hello</h1><img src="a.png">')
    res.end()
}).listen(3002)
