


//mang
function string(arr)// doi sang string
{
  return arr.toString()
}
function join(arr) // them khoang cach giua hai phan tu thành một chuỗi string
{
  return arr.join('-')
}
function pop(arr)// xoa element cuoi mang va tra ve phan tu da xoa
{
  return arr.pop()
}
function push(arr)// them phan thu vao cuoi mang
{
  return arr.push('Tu', 'Tusd')
}
function shift(arr)// xoa element dau mang va tra ve phan tu da xoa
{
  return arr.pop()
}
function unshift(arr)// them phan thu vao cuoi mang
{
  return arr.unshift('Tu', 'Tusd')
}
function splice(arr)// them phan tu hoac xoa phan tu o mot vi tri
{
  return arr.splice(1,1) //(vi tri con tro , so luong xoa) hoac (vi tri con tro , so luong xoa, 'chen phan tu ')
}
function concat(arr,arr2)// noi 2 array voi nhau
{
  return arr.concat(arr2) // arr1 concat arr2
}
function slice(arr)// cat lay mot vai element hoac cat tat ca
{
  return arr.slice(1,2) // vi tri con cho , vi tri phan tu
}
var arr = ['java', 'PHP','Ruby']
//console.log(string(arr))
// console.log(join(arr))
// console.log(pop(arr))
// console.log(push(arr))