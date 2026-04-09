const shape = [{ name: "circle", diameter: 8 }, { name: "square", side: 10 }]
fs = require('fs')
fs.writeFileSync('shape.txt', JSON.stringify(shape))
var d = fs.readFileSync('shape.txt', 'UTF-8')
b = JSON.parse(d)
var pc = (b[0].diameter / 2) * 3.14 * 2
console.log(pc)
var ps = (b[1].side) * 4
console.log(ps)
fs.appendFileSync("shape.txt","\n Perimeter of circle "+pc+"\n Perimeter of square "+ps)