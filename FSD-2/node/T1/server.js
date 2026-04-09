http = require("http");
fs = require("fs");
url = require("url");
var myServer = http.createServer((req, res) => {
     var parseUrl;
  switch (req.url) {
    case "/":
      fs.readFile("./homePage.html", (err, data) => {
        // res.writeHead(200, { "content-Type": "text/html" });
        res.setHeader('Content-Type','text/html')
        res.end(data);
      });
      break;
    case "/img.png":
      fs.readFile("./img.png", (err, data) => {
        res.writeHead(200, { "content-Type": "image/png" });
        res.end(data);
      });
      break;
    case "/about":
      fs.readFile("../Extra/about.html", (err, data) => {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/api":
        parseUrl= url.parse(req.url, true)
        fs.readFile("../Extra/api.html", (err, data) => {
          res.writeHead(200, { "content-Type": "text/html" });
          res.end(data);
      });
      break;
    case '/apis':
        
        const password=parseUrl.query.password
        console.log(password);
        
        let response;
        if (password === '1234') {
            response = {
                status: "success",
                data: [{ "Rohit": 52 }, { "Kohli": 96 }, { "Gill": 20 }, { "Rahul": 33 }]
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        }
        else{
            res.writeHead(404)
            res.end('!!! you are not authorized \nTry again...')
        }

      break;
    default:
      res.writeHead(404, { "content-Type": "text/html" });
      res.end("Page not Found");
      break;
  }
});
myServer.listen(8000, () => {
  console.log("Server started...");
});
