// objects
//Singleton;-
// when you are not making the object with literals. and making like constructor using object.create..
//object literalls:-
// can we use symmbol in objects if yes tell the syntax?
// yes we can use synatx is given below:-
let mySym= Symbol();
const User={
    name:"Fahad Ali",
    age:18,
    "email":"f9384470@gmail.com",
    isLogged: false,
    lastLoggedIn:["Monday","Tuesday"],
    [mySym]:"Key1",
}
console.log(User[mySym]);
console.log(User.name)
console.log(User["age"])
console.log(User["email"])
console.log(User["isLogged"])
console.log(User["lastLoggedIn"])
//how to change the value of key?
User.email="Fahad@gmail.com";
//how to lock an object ?
// Object.freeze(User);
User.email="Fahad@yahoo.com";
// can we use a function in objects ?
//yes
User.greeting=function(){
    console.log("Hi Welcome back!")
}
// Can we use the keys of the same object in Function?
// yes using this
User.greet2=function(){
    console.log(`Hi welcome back ${this.name}`);
    

}
console.log(User.greeting())
console.log(User.greet2())