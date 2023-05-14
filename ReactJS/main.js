//1 thêm element vào một element khác

// var test = document.createElement('h1')
// var root = document.querySelector('.root')

// root.appendChild('test')


//2 thêm React vào Website

//3 React.createElement()
/*   <script>//tạo element
        //DOm
        const h1Dom = document.createElement('h1')
        h1Dom.title = "test1"
        h1Dom.className = " test 2"
        h1Dom.innerText = " tetsdfasdf"
        //React (type, props,chidlren , chidlren n++ )
       const h1React = React.createElement('h1',{
        title: ' hello',
        className: 'heading'
       },'Hello guys')
       console.log(h1React)

    </script>
<script>//Lồng element
//DOM
const ulDom = document.createElement("ul")

const liDom = document.createElement("li")
liDom.title = ' test'
const liDom2 = document.createElement("li")
liDom2.title = ' test2'

ulDom.appendChild(liDom)
ulDom.appendChild(liDom2)
document.body.appendChild("ul")
//React 
const tao1= React.createElement(
    'ul',
    {
        title: "hello",
        className: 'heading'
    },
    React.createElement('li',{title: 'treasd'},"test"),
    React.createElement('li',null,"test2")
    )
//BT
const tao2 = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement('h2',{title: 'Học JS tại F8'},"Học JS"),
    React.createElement('p',null,"Học js cơ bản")
    )
</script>
*/


// 4   ReactDOM React DOM là một thư viện được ví như cầu nối giữa React và DOM
// dùng để render lên html
/*
const tao = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement('h2',{title: 'Học JS tại F8'},"Học JS"),
    React.createElement('p',null,"Học js cơ bản")
    )
    console.log(tao)
     var root = document.getElementById('root')
    // // React-Dom -> reder UI
     ReactDOM.render(tao,root)
     */
    // render React18
    /*const tao = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement('h2',{title: 'Học JS tại F8'},"Học JS"),
    React.createElement('p',null,"Học js cơ bản")
    )
    console.log(tao)
     var rootid = document.getElementById('root')
    // // React-Dom -> reder UI
     //ReactDOM.render(tao,root)
     const root = ReactDOM.createRoot(rootid)
      root.render(tao)*/


      // 5 sử dụng thư viện babel để dùng jsx
      /*<script type="text/babel">
    var roots = document.getElementById('root')
    const courses = [
        {
            name: ' html',
            id : 1
        },
        {
            name:' responsive',
            id : 2
        },
        {
            name:' test',
            id : 3
        }
    ]

    const ul = <ul>{
           courses.map(course => <li >{course.name}</li>) 
        }</ul>

    ReactDOM.render(ul,roots)
    
</script>*/