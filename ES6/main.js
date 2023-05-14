// var / let & const
// toán tử rest trả về những phần tử còn lại trong destructuring hoặc biến các phần 
// phần tử thành mảng trong function
// Class trong es6
// class Test{
//     constructor(a,b){
//         this.a=a
//         this.b=b

//     }
//     getname()  {
//         return this.a


//     }
    
// }


//spread // dùng để nối mảng hoặc hợp nhât object

// var array1 = ['java', 'php', 'test']
// var array2 = ['tt', 'ss', 'gg']
// var array3 = [...array1, ...array2]
// console.log(array3)
/*
var object1 = {
    name : test
}
var object2 = {
    name : test1
}
var object3 ={
    ...object1,
    ...object2
}
 
*/


//tagged template literals

// function test(...rest){
//     console.log(rest)
// }
// var brand = "F8"
// var course = " java"
// test`Hoc lap trinh ${course} tai ${brand} !` // teamplate
//
/*function highlight([first, ...strings], ...values) {
    return values.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
        .join('');
}

var brand = 'Acecook';
var course = 'Hảo Hảo';


const html = highlight`Mì gói ${course} là của ${brand}!`;
console.log(html);*/


// Modules
/*import test,{
    TYPE_ERR,`
    TYPE_LOG,
    TYPE_WARN
} from './logger.js'

console.log('test',TYPE_ERR)*/


//optinal chaining

// xử lý khi có một key,arr,function có thể không tồn tại
/*const obj = {
    name: ' test',
    cat:{
        name:'fsdf',
        cat2:{
            name:'fsdaf',
            cat3:{
                name:'fsdaf'
            }
        }

    }
}
if ( 
    obj?.cat?.cat2?.cat3
){
    console.log(obj.cat.cat2.cat3)
}*/

// const obj = {
//     // getname(value){
//     //     console.log(value)
//     // }
// }

// obj.getname?.(133)




// function arrToObj(arr) {
//     return arr.reduce((toObj,item){
//         toObj[item[0] = item[1]]
//         return toObj
//     },{})
// }
// // function toObj(obj, element){
// //     return {...obj, ...{[element[0]] : element[1]}}
// // }
//  const obj1 = arrToObj([
//     ['name', 'Son Dang'], 
//     ['age', 21], 
//     ['address', 'Ha Noi']
//  ])
//  console.log(obj1)

function arrToObj(infoArr) { 
    return infoArr.reduce((obj,key) =>
    {
    return {...obj, [key[0]] : key[1]}
    }
    ,{})
    }
    
    
    // Expected results:
    
    const obj1 = arrToObj([
       ['name', 'Son Dang'], 
       ['age', 21], 
       ['address', 'Ha Noi']
    ])
    console.log(obj1)
    
    const obj2 = arrToObj([
       ['name', 'Duc Long'], 
       ['age', 18], 
       ['address', 'Ha Noi']
    ])
    console.log(obj2)
    
    
    
