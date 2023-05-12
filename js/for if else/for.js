// for - loop
/*var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){

var orderslength = orders.length
var s = 0
for (var i =0 ; i<orderslength;i++)
{
    s+=orders[i].price
}
return s
}



// Expected results:
getTotal(orders) // Output: 8700000
*/
//for in // lay key trong mot chuoi hoac mang
function run(object) {
    var output = []
 for ( var test in object)
 {
      output.push(`Thuộc tính ${test} có giá trị ${object[test]}`) // test la lay ten key trong mang , object[test] la lay value trong key
 }
 return output
 }
 
 // Expected results:
 console.log(run({ name: 'Nguyen Van A', age: 16 }));
 // Output:
 // [
 //     "Thuộc tính name có giá trị Nguyen Van A",
 //     "Thuộc tính age có giá trị 16"
 // ]

 //for of lay phna tu trong mot chuoi hoac mang
//  for ( var value of myinfor)
//  {

//  }
//  Object.keys(myinfo) // doi object sang array

 // While loop
 var i = 0
 while ( i<=1000){
 i++
}
 // ĐỆ QUY

// 1. Xác định được điểm dừng
// 2. Logic handle

function giaiThua_deQuy(number) {
    if (number > 0) {
        return number * giaiThua_deQuy(number - 1);
    }
    return 1;
}

function giaiThua_Loop(num) {
    var output = 1;
    for (var i = num; i > 0; i--) {
        output *= i;
    }
    return output;
}

// 4! = 4 * 3 * 2 * 1
// 6! = 6 * 5 * 4 * 3 * 2 * 1
console.log(giaiThua_deQuy(4));
console.log(giaiThua_Loop(6));

Thu nhỏ
1

