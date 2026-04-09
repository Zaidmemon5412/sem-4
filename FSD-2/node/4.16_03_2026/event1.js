var EventEmitter=require('events')
var ee=new EventEmitter()
ee.on('mrgFunction',()=>{
    console.log('Today is wedding day');
})
ee.emit('mrgFunction')
// event.addListener(Eventname,Listener)
// event.on(Eventname,listener)
// event.once(Eventname,listener)
