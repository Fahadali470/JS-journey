// <---------------Arrays 02---------------->
// concatination,push,spread,flat(Infinity),isArray,from,Array.of

let frnd=["Fahad","Ali","Bhatti"]
let frnd2=["Danish","Taimoor","Khalil"]
let fvrts=["Fakhar","Amir","Imad"]
// frnd.push(frnd2);
// console.log(frnd);
newfrnd=frnd.concat(frnd2)
console.log(newfrnd);
let all_combo=[...frnd,...frnd2,...fvrts]
console.log(all_combo);
let arr=[1,2,3,4,5,6,[6,7],[8,[4,5],3],2]
console.log(arr.flat(Infinity));
console.log(Array.isArray("Fahad"));
console.log(Array.from("Fahad"))
console.log(Array.from({name:"Fahad"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1 , score2, score3))

