// const fun = function () {
//     console.log("Hello")
// }
// setTimeout(fun,1000)

// setTimeout(() => {
//     console.log("This msg is displayed after 5 seconds ")
// }, 5000);


// setTimeout(function () {
//     console.log("ABC")},5000
// )

// setTimeout(() => {
//     console.log("hello".toUpperCase())
// },1000)

// function ut() {
//     const times = new Date().toLocaleTimeString()
//     console.log(times)
// }
// ut()
// setInterval(ut,1000)

// function main(cb) {
//     console.log('Operation 1')
//     setTimeout(() => {
//         console.log('Operation end')
//         cb('success')
//     }, 2000)
//     console.log('Operation 2')
// }
// function fun(result) {
//     console.log("Final answer",result) //callback function
// }
//     main(fun)

function task(name,callback){
    console.log('Hello',name);
    setTimeout(() => {
        console.log('Task Dome');
        
        callback(name)
        
    },0)
    console.log(' Server isworking...');
    
    
}
function saybye(result){
    console.log('Goodbye',result)
}
task('zaid',saybye)