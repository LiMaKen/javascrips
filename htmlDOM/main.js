// DOM là Document object model // tiêu chuẩn của W3C
// 3 thành phần để thay đổi
// element : ID , class , tag, css selector
// attibute
// text 


// javascipt : brower
// bowser: html -> dom > web api
//document.write(' alo') // in ra man hinh html bang js

// var headingNode1 =  document.getElementById('heading')
// var headingNode2 =  document.getElementsByClassName('test')
// var headingNode3 =  document.getElementsByTagName('p')
//css selector
//var headingNode =  document.querySelector('.heading .p') //css selector
//var headingNode =  document.querySelectorAll('.heading .p') trả về tất cả slector
//htML selector
//console.log(document.anchors) // lấy ra tất cả thẻ a đặt name =//
var headingNode =  document.querySelector('.heading .p')
console.log({
    element : headingNode
})

