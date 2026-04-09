const http = require('http')
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html>
        <body>
        <style>
        nav{
            background-color:  burlywood;
        }
        </style>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
        <p>Home page</p>
        </body>
        </html>`)

        res.end()
    } else if (req.url === '/about') {
        res.write('<h1>About Side</h1>')
        // res.writeHead(301, { 'location': "https://sites.google.com/view/fsd-mern/node/modules/task_node" })
        res.end()
    } else if (req.url === '/contact') {
        res.write('<h1>Contact Side</h1>')
        res.end()
    } else {
        res.write('<h1>Not Found</h1>')
        res.end()
    }
}).listen(5006)