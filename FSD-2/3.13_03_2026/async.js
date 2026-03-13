//Callback Hell
fs = require('fs')
fs.writeFile("Lect1.txt", "JSON", (err) => {
    if (err) {
        throw err
    }
    console.log("Write Operation Done !")
    fs.appendFile("Lect1.txt", "We are student of 4th sem !", (err) => {
        if (err) {
            throw err
        }
        console.log("Append Operation Done !")

        fs.readFile("Lect1.txt", "UTF-8", (err, data) => {
            if (err) {
                throw err
            }
            console.log(data)
        })
    })
})
console.log("Process End")