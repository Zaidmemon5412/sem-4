const { log } = require('console')

http = require('http')
fs = require('fs')
url = require('url')

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true)
    if (parseUrl.pathname === '/') {
        fs.readFile(__dirname + '/api.html', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end("Error loading file");
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (parseUrl.pathname === '/api') {
        const password = parseUrl.query.password;
        let response;
        if (password === '1234') {
            response = {
                status: "success",
                data: [{ "Rohit": 52 }, { "Kohli": 96 }, { "Gill": 20 }, { "Rahul": 33 }]
            };
        }
        else {
            response = {
                status: "error",
                message: "Wrong Password"
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});