var EventEmitter=require('events')
var ee=new EventEmitter()
function deco(){
    console.log('Make decoration');  
}
function p(){
    console.log('take photo');
    
}
function stage(){
    console.log('stage');
}
function c(){
    console.log('caterer');
    
}
ee.on('mrgFunction',deco)
ee.on('mrgFunction',c)
ee.on('mrgFunction',p)
ee.on('mrgFunction',stage)
console.log('check Me');

ee.emit('mrgFunction')
console.log('Thank You');