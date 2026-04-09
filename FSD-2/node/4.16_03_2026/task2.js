
var EventEmitter = require('events')
var ee = new EventEmitter()

let l1 = function listener1() {
    console.log("I am listener 1")
}
let l2 = function listener2() {
    console.log("I am Listener 2")
}
ee.addListener("Conn",l1)
ee.on("Conn",l2) //binds the event with the function
// ee.once("Conn",l2) //binds the event with the function
ee.emit("Conn") 

let d = ee.listenerCount("Conn")
console.log(d)
ee.emit("Conn")
ee.removeListener('Conn',l1)
var d1=ee.listenerCount('Conn')
console.log(d1);
ee.emit("Conn")

