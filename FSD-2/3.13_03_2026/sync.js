fs = require('fs')
fs.writeFileSync("Lect1.txt", "JSON ")
fs.appendFileSync("Lect1.txt", "Node")
data = fs.readFileSync("Lect1.txt", "UTF-8")
console.log(data)
console.log("Process End")

//----------------------------------------

fs.copyFileSync("Lect1.txt", "Lect2.txt")
fs.renameSync("Lect1.txt", "data.txt")
fs.unlinkSync("Lect2.txt")