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


//6 Jsx Render 
  // render nhieu element jsx 
/*const ul = ( 
    <React.fragment> 
    <h1> test1 </h1>
    <h1> test1 </h1>
    </React.fragment>
)
*/


//7 React element type 
/*function PostItem(){
    return (
        <div className="post-item">
            <img src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg'/>
            <h2 className="post-description">Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế </h2>
            <p className="post-info">Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham </p>
        </div>
    )
}

//PostItem
const app = (
    
        <PostItem/>
    
)

// React-DOM --> render UI
ReactDOM.render(app, document.getElementById("root"))*/

//cachs 2 :
/*function PostItem(){
    return (
        <div className="post-item">
            <img src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg'/>
            <h2 className="post-description">Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế </h2>
            <p className="post-info">Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham </p>
        </div>
    )
}

//PostItem
function App()  {
   return(
     <div id="warper">
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
   )
}

// React-DOM --> render UI
ReactDOM.render(<App />, document.getElementById("root"))*/



//7 props 
function PostItem({     
    title,
       image,
       descriptions,   //destructuring //   biến truyền vào
       students_count
})   {
return (
   <div className="post-item">
                 <h2 className="course-titele">{title}</h2>
               <img src={image} alt={title} />   // lấy biến từ app
               <p className="course-decripsiton">{descriptions}</p>
               <p className="course-studentscount">{students_count}</p>
   </div>
)
}

//PostItem
function App() {
       return (
           courses.map((course,index)=>{   
               return(
                   <PostItem
                       key = {index}        //biến chạy lên postitem
                       title = {course.title}
                       image = {course.image_url}
                       descriptions = {course.description}
                       students_count = {course.students_count}
                   />
               )
           }) 
       )
   }

// React-DOM --> render UI
ReactDOM.render(<App />, document.getElementById("root"))



//8   Dom event ( onclick , keydown,....)
function App() {
    return (
      <div id ="war">
        <button>
            onClick={()=>
            alert()
            }
        </button>

      </div>
            )
    }
    


// React-DOM --> render UI
ReactDOM.render(<App />, document.getElementById("root"))