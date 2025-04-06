// singleton
// Object.create 

// OBJECT LITERALS 

/*const mySym = Symbol("key1")
const JsUser = {
    "full name" : "hitesh choudhary",
    name: "hitesh",
    [mySym]: "myKey1",
    age:18,
    location: "jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//console.log(JsUser.full name ); it gives error
//console.log(JsUser.mySym);
console.log(JsUser[mySym]);


JsUser.email =" hitesh@chatgpt.com"
console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
console.log(JsUser.email);
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
//console.log(JsUser.greeting);
console.log(JsUser.greetingtwo()); */



// OBJECTS PART-2

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samm"
tinderUser.isLoggedIn =false
//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = {obj1 , obj2 }
//console.log(obj3);
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


