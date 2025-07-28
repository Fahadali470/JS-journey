//Singleton Objects
const users= new Object();

users.name="Fahad";
users.age=18;
// console.log(users);
// objects in another object
const user={
    email:"f9384470@gamil.com",
    UserName:{
        FullName:{
            firstName:"Ali",
            lastName:"Haider",
        }
    },
}
// console.log(user.UserName.FullName.firstName)
// Can we combine to objects in a single object?
// yes by using assign() and spread method
const obj1={
    1:"A",2:"B",
}
const obj2={
    3:"C",4:"D",
}
const obj3={
    5:"E",6:"F",
}
// const obj4=Object.assign(obj1,obj2,obj3)
// console.log(obj4);
// spread method:-
const obj4 ={...obj1,...obj2}
// console.log(obj4);
// we can also use arrays of objects 
const arr=[
    { id:1, name:"Faraz"},
    { id:2, name:"Nasir"} 
]
arr[1].email="f9384470@gmail.com";
// console.log(arr)
// can we get only keys of objects?
// yes
// console.log(Object.keys(arr[1]))
// console.log(Object.values(arr[1]))
// console.log(Object.hasOwnProperty("name"))
// console.table(arr)
//<---------------------<\"_"/>Destructuring and intro to Json--------->
const {email:mail}=arr[1];
console.log(mail);
//Example of usage of Destructuring in React
const navbar=({company})=>{

}
navbar(company="FABS")
// intro to json api => Api is like that as we ask to waiter in a hotel that i want this food on my table we just need the food. It does not matter how he would make ? This is not our concern similarly we ask to api to give anything it does not matte rhow he would bring it..
//json api
// {
//     "name":"Fahad",
//     "id":1,
//     "email":"f9384470@gmail.com"
// }