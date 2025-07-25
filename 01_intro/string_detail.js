// string concatination
let str1="Fahad Ali";
let str2=98;
console.log(str2+str1);
console.log(`My name is ${str1.toLowerCase()} and my score is ${str2}`)
console.log(str1.charAt(5))
console.log(str1.indexOf('d'))

const str= str1.substring(0,4);
console.log(str)
//slice :-  it can also be done in -ve form
const newstr=str1.slice(-9,-4)
console.log(newstr);
const sen="     ItxFaadi      ";
console.log(sen);
console.log(sen.trim())
const urls="https://www.coursera.org/learn/learn-tailwind-css-scrimba/course-inbox"