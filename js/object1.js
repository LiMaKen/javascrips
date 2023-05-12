
//dang object
var myobject = {
    name: ' tu',
    age:18,
    getName: function() // funtion trong object
    {
        return this.name
    }
}
delete myobject.age //xoa key value
myobject.email=' d.quangtu302@gmail.com' // them key value
console.log(myobject.getName())

//object constructor
function User(firstName, lastName, avatar){
    this.firstName =firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }

}
User.prototype.getTen=function() // prototype  them phuong thuc ngoai vao doi tuong
{
    return `${this.firstName} ${this.lastName}`
}
var author = new User('Tu','Do','Avatar')
var user = new User('Lan','Anh','Avatar')

author.title = 'Chia se dao tai F8' // them title vao author
user.email = ' dasdsa@gmail' // them email vao user
// doi tuong date
var date = new Date()
console.log(date)
// console.log(author.getName())
// console.log(email.getName())

// lay year trong nam 
function getNextYear(year)
{
    var date = new Date()
    year = date.getFullYear()+1
    return year
}
getNextYear(2022)
//Math OBJECT
/*
- Math.pi in ra so pi
- Math.round lam tron so theo 5
- Math.abs gia tri tuyet doi
- Math.ceil(4.111) => 5 lam tron tren 
- Math.floor(4.1111) =>>>4 lam tron duoi
-Math.random () ran dom so nho hon 1
- Math.min(100,4,5,6) lay so nho nhat
- Math.max(100,4,5,6) lay so lon nhat
*/
// bai toan random  cua ( math object)
var random = Math.floor(Math.random()*100)
if (random<50)
{
    console.log('cuong hoa thanh cong')
}
//end