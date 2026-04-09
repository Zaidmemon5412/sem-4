var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fun(arr) {
    obj = {}
    for (ele of arr)
    {
        obj[ele[0]]=ele[1]
    }
    console.log(obj)
}
fun(arr)
