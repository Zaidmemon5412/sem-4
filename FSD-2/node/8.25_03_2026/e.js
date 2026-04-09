http = require('http');
url = require('url');
fs = require('fs');

const url1 = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
const q = url.parse(url1, true)
console.log(q.pathname);
process.noDeprecation=true
const c1 = q.query.c1
const c2 = q.query.c2
const c3 = q.query.c3
const hash = q.hash
const fname = "." + q.pathname
const fcon = c1 + "!\n" + c3 + " " + c2 + "\n" + hash

fs.writeFileSync(fname, fcon)
const server = http.createServer((req, res) => {
    data=fs.readFileSync(fname,"UTF-8")
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text-html" })
        res.end("<h1 style='color:red'><pre>" + data + "</pre></h1>")
    }
    else {
        res.writeHead(404, { "content-type": "text-html" })
        res.end("Page not found")
    }
})
server.listen(6008)