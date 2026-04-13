fs = require('fs')

player = [{ name: "Rohit", runs: 52 }, { name: "Kohli", runs: 96 }, { name: "Gill", runs: 20 }, { name: "Rahul", runs: 33 }, { name: "Tilak",runs: 30 }]

fs.writeFileSync("score.txt", JSON.stringify(player))
var a = fs.readFileSync("score.txt", "UTF-8")

player.push({ name: "Hardik", runs: 52 })
console.log(player)
fs.writeFileSync("score.txt", JSON.stringify(player))

let totalRuns = 0
player.forEach(p => totalRuns += p.runs)
console.log(totalRuns)
let runrate = totalRuns / 20
console.log(runrate)

fs.appendFileSync("score.txt", "\nTotalRuns:"+totalRuns)
fs.appendFileSync("score.txt", "\nRunrate:"+runrate)

for (let i = 0; i < player.length; i++){
    if (player[i].runs > 50) {
        fs.appendFileSync("score.txt","\n-" + player[i].name)
    }
    
}