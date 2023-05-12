// tạo for in
// kiểm tra có trong thuộc tính hay trong prototype #hasOwnProperty
Array.prototype.forEach2= function(Callback){
    for (var key in this)
    {
        if (this.hasOwnProperty(key) )
        {
            Callback(this[key],key,this)
        }
    }
}





var arr = [ 'java', ' dev c','php']

function testforeach(array) {
    array.forEach2(function(a,b,c){
    console.log(a,b,c)
   
})

}
testforeach(arr)