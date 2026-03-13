fs = require('fs')
const shape = { data: { a: 15, b: 20, c: [40, 30] } }
fs.writeFileSync('input.txt',JSON.stringify(shape))
var data1 = fs.readFileSync("input.txt", "UTF-8")
d1 = JSON.parse(data1)
add = d1.data.a + d1.data.b
sub = Math.abs(d1.data.c[1] - d1.data.b)
mul = d1.data.c[1] + d1.data.c[0]
console.log(add, sub, mul)
fs.appendFileSync("input.txt", "\nAddition is : " +add+"\nSubtraction : "+sub+"\nMultiplication : "+mul)