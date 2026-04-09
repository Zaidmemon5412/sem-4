pm = require('path')
fs = require('fs')
var path = pm.dirname('./FSD-mern/path.txt')
var fname = pm.basename('./FSD-mern/path.txt')
var newpath = path + fname
console.log('Dir name : ', path);
console.log('File Name : ', fname);
console.log(path);

fs.mkdir(path, (err) => {
    if (err) throw err
    console.log('Dir created');
    fs.writeFile(newpath, 'Data Write...', (err) => {
        if (err) throw err
        console.log('Write Successfully');
        fs.copyFile(newpath, path + '/copy.txt', (err) => {
            if (err) throw err
            console.log('copy Successfully');
            fs.unlink(newpath, (err) => {
                if (err) throw err
                console.log('Del Successfully');
            })
        })
    })
})