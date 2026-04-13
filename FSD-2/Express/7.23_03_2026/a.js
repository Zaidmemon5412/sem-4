const http = require('http')
let server = http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'application/json'})
    let data = { "name": "Rohit", "Runs": 52 }
    res.end(JSON.stringify(data))
})//.listen(6008)
server.listen(6009,()=> {
    console.log("Server connected")
})