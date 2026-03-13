const arr = [
    { name: "abcd", age: 22 },
    { name: "xyz", age: 23 },
    { name: "pqr", age: 24 }
]

fs = require('fs')

// for (let i = 0; i < arr.length; i++) {
//     fs.appendFileSync('task2.txt',JSON.stringify(arr[i])+"\n")
// }

let data = fs.readFileSync('task2.txt', 'UTF-8')
let obj = {}
let d1 = data.split("\n")

for (let i = 0; i < d1.length; i++) {
    obj[i] = d1[i]
}
console.log(obj)