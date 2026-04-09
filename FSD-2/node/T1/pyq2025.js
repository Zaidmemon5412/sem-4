const { log } = require('console');

fs=require('fs')
var obj={'Entry1':'Pass','Entry2':'Fail','Entry3':'Pass','Entry4':'Pass'}

fs.writeFile('./test.txt',JSON.stringify(obj),(err)=>{
    if (err) throw err;
    console.log('writing done...')
    fs.readFile('./test.txt','utf-8',(err,data)=>{
        var count=0;
        var jsondata=JSON.parse(data)
        console.log(jsondata);
        for(elem in jsondata){
            if(jsondata[elem]==='Pass'){
                count++;
            }
            
        }
        if(count>=3){
            fs.writeFile('./test.txt','',(err)=>{
                if(err) throw err
                 console.log('Erase the file content');
                 
            })
        }
        console.log(count);
        
        
    })
})