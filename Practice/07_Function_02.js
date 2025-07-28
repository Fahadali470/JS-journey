// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:

function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
} 


// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))

// function convertTemperature(celsius, decimalPlaces = 1) {
//     // celsius to fahrenheit
// //   decimalPlaces = decimalPlaces || 1;
//   const fahrenheit = celsius * 1.8 + 32;
//   return Number(fahrenheit.toFixed(decimalPlaces));
// }

// console.log(convertTemperature(21, 0));