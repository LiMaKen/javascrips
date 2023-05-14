/*
1. JSON
2. Fetch
3. DOM location
4. Local storage
5. Sesion storage
6. Coding convention
7. Best practices
8 Mistakes
9 Performance
*/

// Json là một định dạng dữ liệu (chuỗi)
// javascript Object Notation
// JSON : Number, Boolean , string , Null , Array, object
// Mã hóa / giải mã
// encode / decode
// stringify: tu java type => json
// parse tu JSON -> java

// var json = '["java","php"]'
// var json = '{"name":"quang tu","age":18}'

// var a ='1'
// console.log(JSON.parse(a))
// console.log(JSON.stringify(['java','fasdf']))


//2 promise
// sync / Async đồng bộ và bất đồng bộ

// setTimeout(function(){
//     console.log(2)
// })
// console.log(1) // như này là bất đồng bộ
// /////////////////////
// console.log(1)
// console.log(2) // như này là đồng bộ

//3 call back hell
// setTimeout(function(){
//          console.log(1)
//          setTimeout(function(){
//             console.log(2)
//             setTimeout(function(){
//                 console.log(3)
//                 setTimeout(function(){
//                     console.log(4)
//             })
//         })
//     })
//  })

//4 promise ( concept) xử lý callback hell
// var promise = new Promise(
//     function(resolve,reject){
//         // logic 
//         // thành công : resolve() khi thao tác xử lý thành công
//         // thất bại: reject()  khi thao tác xử lý thất bạn
//         resolve('thành công')
// })

//5 promise
// .then (function(test){
//     console.log(test) // nhận từ resolve
// })
// .catch (function(){
//     console.log(' thất bại') // nhận từ resolve
// })
// .finally(function(){
//     console.log('Xong')
// })

//6 Promise ( Chain)

// function test(){
//     return new Promise((resolve) => {
//         setTimeout(resolve, 1000);
//     })
// }

// test(1000)
//     .then(
//         function(data){
           
//             return 1;
//         }
//     )

//     .then(
//         function(data){
//             console.log(data)
//             return 2;
//         }
//     )
//     .then(
//         function(data){
//             console.log(data)
//             return 3;
//         }
//     )
//     .then(
//         function(data){
//             console.log(data)
            
//         }
//     )








/*function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

sleep(2000)
    .then(
        function(){
            console.log(1)
            return sleep(2000);
        }
    )

    .then(
        function(){
            console.log(1)
            return sleep(2000);
        }
    )
    .then(
        function(){
            console.log(1)
            return sleep(2000);
        }
    )
*/

//Ví dụ về callback hell và cách giải quyết bằng Promise
/*Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise để giải quyết nó.

Các bạn có thể thấy khi tạo ra 1 đoạn code callback hell sẽ dẫn đến khó đọc code, thay vì viết như thế, chúng ta có thể áp dụng tính chất chuỗi (chain) 
của Promise để tạo ra 1 đoạn code dễ nhìn hơn mà vẫn đảm bảo đúng logic.*/
/*
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });

*/


//6 promise.resolve
// promise.reject
//promise.all


//7 fetch ( call api , lấy dữ liệu)
/*
var postApi = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.completed}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert("MESSAGE: ERROR!");
    });
    */


