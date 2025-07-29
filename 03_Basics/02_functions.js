// functions and use of rest operator
// function valueReturn(...num2){
//     return num2;
// }
// console.log(valueReturn(2,3,4,5,610,7))
// how to pass object to functions
const obj={
    name:"Fahad",
    id:1,
}
function objUsage(myobj){
    return `Employee name is ${myobj.name} with empId ${myobj.id}`
}
result=objUsage(obj);
// console.log(result);

// Usage of array in functions
arr=[1,2,3,45,6,7,8]
function arrUsage(myarr){
//  console.log(`Arrays 1st element is : ${myarr[0]}`)
}
arrUsage(arr);
//<-------------------------- Functions scope---------------------------->
function addOne(num){
    let id=num;
    function detail()
    {
        name="Faadi";
        console.log(`My name is : ${name} with user id : ${id}`)
    }
    detail();
}

addOne(5);
function addone (num){
    return num+5;
}
const addDouble= function(num){
    return num+10;;
}
console.log(addDouble(10))