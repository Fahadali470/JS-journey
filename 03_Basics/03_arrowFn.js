// Arrow functions syntax 
// const addtwo=(name)=>{
//     console.log(`Hi ${name}, welocme to the world of programming`)
// }
// console.log(addtwo("Fahad Bhatti"));
// const addone = (n1,n2) => (n1+n2)
// console.log(addone(7,8));
// // return an object
// const retrnObject=(n1,n2)=>({name:"Fahad Bhatti"})
// console.log(retrnObject(5,8))

// <--------------------Use of this------------------->
let obj={
    name:"faadi",
    id:2,
    eMail:"f9384470@gmail.com",
    greet:function(){
        console.log(`WELCOME, ${this.name} to the world of programming`)
        // console.log(this)
    },
    
}
// console.log(this);
console.log(obj.greet());

// const addtwo= function(name){
//     console.log(this)
// }
// addtwo();
const addtwo=(name)=>(console.log(this))
addtwo();
// function addtwo(name){
//     console.log(this)
// }
// addtwo();
