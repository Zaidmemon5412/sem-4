var fs=require('fs')
var EventEmitter=require('events')
var ee=new EventEmitter()
ee.on('Create',(fname)=>{
    fs.writeFile(fname,'Hello, How are you\n',()=>{
       
        console.log("Write in file");
        ee.emit('update','new.txt')
    })
})
ee.on('update',(fname)=>{
    fs.appendFile(fname,'Append In File',()=>{
       
        console.log("append in file");
        ee.emit('read','new.txt')
    })
})
ee.on('read',(fname)=>{
    fs.readFile(fname,'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
        ee.emit('final','new.txt')
    })
})
ee.on('final',(fname)=>{
   console.log('Crud Done');
   
})

ee.emit('Create','new.txt')

