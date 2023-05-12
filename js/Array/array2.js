// Mảng 

courses=[
    {
      id :0,
      name: "html",
      coin:200
    },
    {
        id :1,
        name: "php",
        coin:0
    },
    {
        id :2,
        name: "java",
        coin:300
    },
    {
        id :1,
        name: "html",
        coin:200
    },
    {
        id :1,
        name: "css",
        coin:300
    },
  ]
      courses.forEach(function (course,index) { // duyet mang
        console.log(index,course)
      })
      var check=courses.every(function (course,indel) { // duyet tat ca mang thoa man dieu kien tra ve bool
       return course.coin===0
      
      });
      console.log("every()"+" check all coin=0 : " +check) 
       var check=courses.every(function (course,indel) {
            return course.coin===200
          
       });
          console.log("some()"+" check coin=200 : "+check) // duyet tat ca mang chi can 1 cai thoa man la tra ve bool
        var check=courses.find(function (course,indel) {
          return course.name==="html"
  
        });
        console.log("find()"+" check name html : ") // tim phan tu thoa man va lay phan tu do tra ve phan tu do ( chi tra ve 1 phan tu dung dau tien)
        console.log(check)
   
          var check=courses.filter(function (course,indel) { // tim phan tu thoa man va lay phan tu do tra ve phan tu do ( tra ve tat ca phan tu )
            return course.name==="html"
  
          });
          console.log("filter()"+" check name html : ")
          console.log(check)
          /*Cú pháp của map() như sau:

        array.map(function(element, index, array) {   // Code xử lý được áp dụng vào mỗi phần tử của mảng });

        Trong đó:

        function(element, index, array) là hàm xử lý áp dụng vào mỗi phần tử của mảng.
        element: giá trị của phần tử hiện tại được xử lý.
        index: chỉ số (index) của phần tử đó trong mảng gốc.
        array: mảng gốc đang được xử lý.
        // them ten mon the thao truoc bong ro, boi loi
// thêm trường like Text 
const sports = [
    {
        id: 1,
        name: 'Bóng rổ',
        like: 6
    },
    {
        id: 2,
        name: 'Bơi lội',
        like: 5
    },
    {
        id: 3,
        name: 'Bóng đá',
        like: 10
    },
];

var myHandle = function(sport, index) {
    return {
        id: sport.id,
        name: `Môn thể thao: ${sport.name}`,
        like: `Số lượt thích: ${sport.like}`,
        likeText: `Bằng chữ: ${sport.like}`
    }
}

var html = sports.map(myHandle)

console.log(html)

*/

var courses = [
  {
      id:1,
      name:'Java',
      like: 150,
      coin:100,
  },
  {
      id:2,
      name:'C++',
      coin: 150,
      like :102,
  },
  {
      id:3,
      name:'Python',
      coin: 100,
      like: 150,
  },
  {
      id:4,
      name:'C#',
      coin: 200,
      like:400,
  },
  {
      id:5,
      name:'PHP',
      coin: 300,
      like:500,
  }
]
//REDUCE
// 1. Dễ hiểu -> (vòng lặp)
// 2.Ngắn gọn -> (dùng các cách trên)
// 3.Hiệu năng -> (vòng lặp) không đáng kể 

// vòng lặp
// var totalCoin =  0 // định nghĩa coin chờ (biến lưu trữ)
// // vòng for lặp qua các phần tử
// for ( var  course of courses) {
//     // thực hiện lưu trữ 
//     totalCoin += course.coin
   
// }
// console.log(totalCoin);

// reduce // biến lưu trữ 
var i = 0 ;
                  // được reduce(2) gán cho   
                          // giá trị vùng array được gọi
function coinHandler(accumulator, currentvalue, currentIndex,originArray,){
                           // giá trị hiện tai 
 i ++ ;
 var total = accumulator + currentvalue.coin
          console.table({
              'lượt chạy':i,
              'biến lưu trữ':accumulator,
          'giá trị cộng thêm':currentvalue.coin,
          'Tích trữ được': total,

          }    )   ;
         
                      
   return     total;

      

          
                
}


// gán giá trị của accumlator vào coin    // function -> giá trị khởi tạo(biến chờ,intital value)
           var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin)





function likeHandler(accumlatorlike,currentvaluelike,currentIndexlike,originArray){
  var z = 0 
  z ++ ;

  var totallike = accumlatorlike + currentvaluelike.like ;
  console.table({
       "STT:": z,
       'Số like khởi tạo' : accumlatorlike,
       'Số like cộng thêm': currentvaluelike.like,
       ' Số like đang tích trữ' : totallike,
  }
      
  )
  return totallike;
}
var totallike = courses.reduce(likeHandler,0);
console.log(totallike)
//String/Array includes() method kiem tra xem co phan tu trong mang hay chuoi khong 