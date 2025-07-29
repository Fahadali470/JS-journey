//<--------------------Functions------------------------>
function greet(name){
    if(!name)
    {
        console.log("Please enter your user name")
    }
    else{
        return `hi, ${name} welcome back! `
    }
}
let result=greet("Faadi")
console.log(result);