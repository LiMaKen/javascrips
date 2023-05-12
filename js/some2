Array.prototype.some2 = function(callback){
    
    for ( var index in this){
        if (this.hasOwnProperty(index))
        {
           var trave =  callback(this[index],index,this)
            if (trave)
            {
               return true
            }
            else
            {
                
            }
        }
    }
    return false
   
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
var check = dabong.some2(function(a,b,c){
 
    return a.coin ===888
})

console.log(check)