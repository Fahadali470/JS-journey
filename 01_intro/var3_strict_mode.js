"use strict"
message="hello world"; //global  variable
var message="hello"; //local variable
console.log(globalThis.message);
//hoisting
// var age;
// age=26;
// console.log(age);//undefined
// age=18;
//solution of hooisting 
let age;
console.log(age);
 
 age=26;
// browser - window
// server - global

// console.log(message);

// var console = 'hi'
// console.log("hi");

// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language