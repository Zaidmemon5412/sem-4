const http=require('http')
const fs=require('fs')
const { log } = require('console')


const myServer=http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            fs.readFile('./home.html',(err,data)=>{
                res.writeHead(200,{'content-type':'text/HTML'})
                res.end(data)
            })
            break;
        case '/about':
            fs.readFile('./about.html',(err,data)=>{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            })
            break;
        break;
        case "/img.png":
            fs.readFile('./img.png',(err,data)=>{
                res.writeHead(200,{'Content-Type':'image/png'})
                res.end(data)
            })
            break;
    }
})
myServer.listen(8000,()=>{
    console.log('Server Started..');
    
})