const name ="hitessh"
const repoCount =50

console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String(`hiteshhhh-hc`)
 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t')); 

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);      

const newStringone = "     hitesh     "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http:hitesh.com/hitesh%20chouadhay"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
