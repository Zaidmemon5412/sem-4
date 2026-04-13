const http = require('http')
let server = http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("Hii")
    res.write("<h1>Hello Server</h1>")
    res.end("How R u?")
})//.listen(6008)
server.listen(6008,()=> {
    console.log("Server connected")
})