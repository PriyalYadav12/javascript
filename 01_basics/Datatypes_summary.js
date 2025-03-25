/*
PRIMITIVE
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 7584658237887779

/*REFERNCE (NON-PRIMITIVE)
array, objects, functions
*/

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world");    
}
 


// **********  STACK (PRIMITIVE) || HEAP(NON-PRIMITIVE) ************

let myYoutubename = "hiteshchoudharycom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1
user2.email = "hietsh@google.com"

console.log(user1.email);
console.log(user2.email);

