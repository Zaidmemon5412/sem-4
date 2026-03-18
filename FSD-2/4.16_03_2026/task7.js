var e=require('events')
var ee=new e()
ee.on('calculator',(marks)=>{
    console.log(marks);
    
    let total=0;
    for(mark of marks){
        total+=mark
    }
    console.log(`Total Marks : ${total}`);
    ee.emit('percentage',total)
})
ee.on('percentage',(total)=>{
    per=(total/125)*100
    console.log('percentage',per);
    
})
marks=[23,22,12,21,20]
ee.emit('calculator',(marks))