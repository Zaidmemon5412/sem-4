const http = require('http');

const numShares = 100;
const buyPrice = 50;
const sellPrice = 60;

const Cost = numShares * buyPrice;
const total = numShares * sellPrice;
const profit = total - Cost;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Home page")
        res.end()
    }
    else if (req.url === '/stock') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        let message = "";
        let color = "";

        if (profit > 0) {
            message = `Profit: Rs. ${profit}`;
            color = "green";
        } else if (profit < 0) {
            message = `Loss: Rs. ${Math.abs(profit)}`;
            color = "red";
        } else {
            message = "No Profit, No Loss";
            color = "black";
        }

        res.write(`<h1>Stock Investment Calculator</h1>`);
        res.write(`<p style="color: ${color}; font-size: 20px; font-weight: bold;">${message}</p>`);
        res.write(`<p>Total Cost: Rs. ${Cost}</p>`);
        res.write(`<p>Total Revenue: Rs. ${total}</p>`);
        res.end();
    }
    else {
        res.write("Page not found")
        res.end()
    }
}).listen(3000);

