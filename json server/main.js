var testApi = 'http://localhost:3000/test1'
fetch(testApi)
.then(function(respont){
    return respont.json()
})
.then(function(date){
    console.log(date)
})




// Create: tạo mới -> post
// read: lấy dữ liệu -> get
// upodate: chỉnh sửa -> put/patch
// delete : xóa