// DOM là Document object model // tiêu chuẩn của W3C
// 3 thành phần để thay đổi
// element : ID , class , tag, css selector
// attibute
// text 

//1

// javascipt : brower
// bowser: html -> dom > web api
//document.write(' alo') // in ra man hinh html bang js

// var headingNode1 =  document.getElementById('heading') // tra ve 1 element
// var headingNode2 =  document.getElementsByClassName('test') tra ve html concelecter
// var headingNode3 =  document.getElementsByTagName('p') // tra ve html concelecter
//css selector
//var headingNode =  document.querySelector('.heading .p') //css selector // tra ve 1 element
//var headingNode =  document.querySelectorAll('.heading .p') trả về tất cả slector dang node list
//htML selector
//console.log(document.anchors) // lấy ra tất cả thẻ a đặt name =//
//var headingNode =  document.querySelector('.heading .p')



//2 
// var boxNode = document.querySelectorAll('.test-1 li')
//  console.log(boxNode)
// console.log(boxNode.getElementsByTagName('li'))
// console.log(boxNode.querySelectorAll('p'))
// var box = document.querySelector('.test-2')
// console.log(box)
// console.log(box.querySelector('li'))
// console.log(box.querySelector('p'))

//  }


//3
//var boxNode = document.querySelectorAll('.test-1 li')
//  console.log(boxNode)
//  for (var i=0; i< boxNode.length ; i++ ){
//     console.log(boxNode[i])
//console.log(document.forms('form1'))

//4 DOM attributes
//var heading = document.querySelector('.test2')

//heading.title = 'test' // .id . className  // truy xuat trực tiếp qua thuộc tính
//heading.setAttribute('class','heading') // them attributes bất kì // qua phương thức
//heading.getAttribute('class') // lay value cua attributes
//heading.id = 'alo'

//5 innerText vs Text content
// console.log( heading.innerText) // lấy text và gán thay đổi với text nhìn thấy trên html ( bỏ qua tất cả element node)
// console.log( heading.textContent) // lấy text và gán thay đổi với text trên đoạn mã html ( bỏ qua tất cả element node)
// heading.innerText = 'test'

//6 innerHTML vs OuterHTML 

//heading.innerHTML= '<h2 id="testtt">test</h2>' // gán và lấy một element, ghi đè và lấy dưới attribust
//heading.outerHTML= '<h2 id="testtt">test</h2>' // gán và lấy một element, ghi đè và lấy từ attribust ( giá trị không còn tồn tại trong html nữa)

//VD:
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var taoarray = courses.map(function(a){
        var test = `<li>${a}</li>`
        return test
    })
   
    var noithe = taoarray.join(' ')
    var ganthe = document.querySelector('ul')
        ganthe.innerHTML = noithe
        return ganthe
    
}
console.log( render(courses))

//7 
/*console.log([boxElement]) đây là cách tìm cách phương thức

Các phương thức và thuộc tính của boxElement var boxElement = document.querySelector('.box'); console.log([boxElement]); className để lấy ra class id để lấy ra attribute id innerHTML innerText textContent clientHeight: kích thước chiều cao của element clientWidth: kích thước chiều rộng của element clientLeft: trục ngang clientTop: trục dọc

attributes: trả về đối tượng NamedNodeMap, nó như array nó có đánh index cho các phần tử bên trong và có thuộc tính length để chỉ ra độ dài. Nó là 1 thuộc tính của elementNode.

autocapitalize: nếu nó = true tức là nó được enable thì các dòng chữ sẽ được tự động viết hoa

autofocus: tự động kích hoạt con trỏ chuột nháy nháy trong ô input

baseURI: trả về URI hiện tại đang truy cập, bao gồm cả domain, hostname và cả bass đằng sau nứa

childElementCount: đếm phần tử con là elementNode ở bên trong

childNode: đếm các phần tử con bên trong bao gồm cả textNode và ElementNode bên trong

nodeValue: cũng là nội dụng

textNode childRen: trả về HTMLCollection và có các ElementNode ở bên trong

classList: quản lí 1 attribute class của 1

Element firstChild: lấy ra con đầu tiên của boxElement

firstElementChild: trả về Element đầu tiên, có thể là thẻ h1, nếu như có thêm nhiều thẻ thì nó sẽ chỉ lấy thẻ đầu tiên

hidden: kiểm tra có đang ẩn hay không trả về true false localName là name trong Element

(div) nextElementSibling: là các thằng anh em ruột, nó trả về element đằng sau thằng đang xét, nếu mà nó không có thì nó sẽ trả về null

nextSibling: nó trả về Node tiếp theo bao gồm cả textNode hoặc là ElementNode

ownerDocument:element đang xét nằm trong tài liệu sở hữu nào thì nó sẽ trả về tài liệu sở hữu đó (thường thì nằm trong document).parentElement là thẻ cha của element đang xét, (parent sẽ luôn là Element)

parentNode: là node cha của node đang xét spellcheck: để check chính tả tabIndex: là khoảng cách tab title trả về title attribute, nội dung của title ElementNode sẽ có nodeType là 1 AttributeNode có nodeType là 2 TextNode có type nodeType 3

Tất cả các Element trong HTML đều có thể biến thành 1 thẻ input Khi 1 Element có attribute là contenteditable="" thì chính nó và element con của nó có thể chỉnh sữa như 1 thẻ input
*/