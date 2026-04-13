const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(req.url+"<br>")
    res.end("URL fetched")
}).listen(3006)
