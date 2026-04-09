const fs= require('fs')
const data =fs.readFileSync('./data.json','utf-8')
var jsonData=JSON.parse(data)

for (let user of jsonData.user){
    let pcount=0
    let posts=jsonData.posts
    console.log(`userName:`,user.name);
    for (let post of posts){
        if (post.userId===user.userid){
            pcount+=1
            console.log(`Post Title:`,post.title); 
        }
    }
    console.log(`Total Post : `,pcount);
}
var commentEmail={}

for(let post of jsonData.posts){
    for (let comment of jsonData.comments){
        if (comment.postId===post.postid){
            if(commentEmail[post.title]){
                commentEmail[post.title].push(comment.email)
            }else{
                commentEmail[post.title]=[comment.email]
            }
        }
    }
}
fs.writeFileSync('./analysis.txt',JSON.stringify(commentEmail))
console.log(commentEmail);

 