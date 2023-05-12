Array.prototype.filter2 = function(callback){
    var output = []
    for ( var index in this){
        if (this.hasOwnProperty(index))
        {
           var trave =  callback(this[index],index,this)
            if (trave)
            {
                output.push(this[index])
            }
        }
    }
    return output
}





var dabong = [
    {
        id: 1,
        coin: 200
},
{
         id: 2,
         coin: 500
},
{
    id: 3,
    coin: 888
}
]
var check = dabong.filter2(function(a,b,c){
 
    return a.coin>300
})

console.log(check)