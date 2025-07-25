// javascript is a dynamically type language as there is no need to deeclare the data type of variables. Variables datatype is automatically determined at runtime..
//there are two types of memory based on how data is stored in memory mean is data is stored by reference or by value.
//--> Permitive
// 7 types Boolean, Number, null,String,undefined,BigInt,Symbol
//--> Non-permitive
//Array,Function,Object
const loggedIn=true;
const score=100;
const temp=null;
const name="Fahad Ali";
let email;
let money=123456789009876567;
const id=Symbol("123");
const otherID=Symbol("123");
console.log(id==otherID);
let names=["FAHAD","NASIR","ALI","TAHIR"]
let person={
     name:"Fahad",
     roll_no:1,
}
let myfn= Function()
{
    console.log("Hello World");
}
console.log(typeof myfn);

 