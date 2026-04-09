const { log } = require("console");
const fs = require("fs");
const data = {
  "First Post": [
    "commenter.one@example.com",
    "commenter.two@example.com",
    "commenter.nine@example.com",
  ],
  "Second Post": ["commenter.three@example.com"],
  "Third Post": [
    "commenter.four@example.com",
    "commenter.seven@example.com",
    "commenter.eight@example.com",
  ],
  "Fourth Post": ["commenter.five@example.com"],
  "Fifth Post": ["commenter.six@example.com"],
};
fs.writeFile("./first.txt", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("File write successfully...");
  fs.readFile("./first.txt", "utf-8", (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    console.log("File Data:");
    let upost = [];
    for (let post in obj) {
      console.log(post);
      upost.push(post);
    }
    var datatoAppend = "\n# Total Posts\n" + upost.join("\n");
    fs.appendFile("./first.txt", datatoAppend, (err) => {
      if (err) throw err;
      console.log("data append successfully...");
      fs.copyFile("./first.txt", "./first2.txt", (err) => {
        if (err) throw err;
        console.log("File copied successfully.");
        setTimeout(function(){
            fs.unlink('./first2.txt',(err)=>{
            if(err) throw err
            console.log('FIle Unlinked...');
              })
        },5000)
      });
    });
  });
});
