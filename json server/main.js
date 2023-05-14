var testApi = 'http://localhost:3000/test1'
fetch(testApi)
.then(function(respont){
    return respont.json()
})
.then(function(date){
    console.log(date)
})