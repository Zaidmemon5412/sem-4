var pm = require('path')
var a = pm.basename("D:\SamilUka_B1\FSD\\data.txt")
console.log(a)
var b = pm.extname("D:\SamilUka_B1\FSD\\data.txt")
console.log(b)
var c = pm.dirname("D:\SamilUka_B1\FSD\\data.txt")
console.log(c)
var d = pm.parse("D:\SamilUka_B1\FSD\\data.txt")
console.log(d)

// if (b == ".txt") {
//     console.log("File is text base")
// } else {
//     console.log("File is not text base");
// }

if (d.ext == ".txt") {
    console.log("File is text base")
} else {
    console.log("File is not text base");
}