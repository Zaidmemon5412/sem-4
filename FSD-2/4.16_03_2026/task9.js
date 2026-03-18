var e = require('events')
var ee=new e()
var path=require('path')
var fs=require('fs')

ee.on('makedir',(dirname)=>{
    fs.mkdirSync(dirname, { recursive: true })
    var fname= path.join(dirname, 'abc.txt')
    ee.emit('create File',fname)
})
ee.on('create File',(fname)=>{
    fs.writeFileSync(fname,'Hello, How are you \n')
    ee.emit('append',fname)
})
ee.on('append',(fname)=>{
    fs.appendFileSync(fname,'Append Some Data')
    ee.emit('read',fname)
})
ee.on('read',(fname)=>{
    let data =fs.readFileSync(fname,'utf-8')
    console.log(data);
    ee.emit('Copy',fname,'newFile.txt')
})
ee.on('Copy',(fname,nname)=>{
    fs.copyFileSync(fname,nname)
    console.log('COPY DONE');
    ee.emit('Delete',fname)
})
ee.on('Delete',(fname)=>{
    fs.unlinkSync(fname)
    console.log('Delete DONE');
})
ee.emit('makedir','D:\FSD-mern')
