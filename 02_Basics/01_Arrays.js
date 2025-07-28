// arrays
// Properties of array:-
//JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//we will learn use of typeof,push,pop,unshift,shift,slice,splice,array declaration methods,includes ,index of ,join
let arr=[0,1,2,3,4,5]
let hero=["sallu","amir","Fahad"]
let arr1= new Array(5,10,15,20,"faadi",true)
let arr2= arr.join();
console.log(arr2);
console.log(typeof arr);


// console.log(typeof arr);
// console.log(typeof hero);
// console.log(typeof arr1);
arr.push(6);
arr.push(7);
arr.pop();
arr.unshift("Natural Numbers")
console.log(arr);

console.log(arr.includes(5));
console.log(arr.indexOf("Natural Numbers"));


