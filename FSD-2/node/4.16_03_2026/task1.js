var EventEmitter=require('events')
var ee=new EventEmitter()
ee.on('status',(code,type)=>{
    console.log(`status code is ${code} will represent msg ${type}`);
  
})
  ee.emit('status',404,'not valid')
