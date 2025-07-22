//<----- VARIABLE SHADOWING ------>
// var price=20;
// var isSold=true;
// if(isSold){
//     var price=20-2;
//     console.log(price);
// }
// console.log(price);
let price=20;
let isSold=true;
if(isSold){
    let price=20-2;
    console.log(price);
}
console.log(price);

// const and let are blockscope but var does not follow the blockscope rule