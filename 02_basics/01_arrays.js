// ARRAYS

const myArr =[1,2,3,4,5]
const myHeroes = ["shaktiman" , "naagraj"]

console.log(myArr[0]);

// ARRAY METHODS
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

//myArr.unshift(0)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(typeof newArr);
console.log(newArr);


// SLICE OR SPLICE
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B " ,myArr);


const myn2 = myArr.splice(1,3)
console.log("C " ,myArr);
console.log(myn2);

