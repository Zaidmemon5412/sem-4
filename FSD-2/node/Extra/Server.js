const http=require('http');
const fs=require('fs');
const { log } = require('console');


const myserver=http.createServer((req,res)=>{

    const log=fs.appendFile("log.txt",`${Date.now()}:New Response From  ${req.url} \n`,(err,data)=>{
        if (err) throw err
    
        switch(req.url){
            case '/':  res.end('Hello This is home page..')
            break;
            case '/about': res.end('My name Is zaid I am the owner of server')
            break;
            case '/tasks': res.end('add one number with another number using Binary addition')
            break;
            default:
                 res.end('404 Error unautherized Req')
                 myserver.close()
            break;
        }
    })
})
myserver.listen(8000,()=> console.log('Server Started'));
