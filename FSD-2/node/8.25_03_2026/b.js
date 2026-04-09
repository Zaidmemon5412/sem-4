const http = require('http')
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html><body><p id='demo'></p>
        <script>
        setTimeout(()=>{document.getElementById('demo').innerHTML='Welcome Student'},5000)
        </script></body></html>`)
        res.end()
    }).listen(3010)
