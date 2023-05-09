const assertArraysEqual = require('../assertArraysEqual');


const testArr1 = ["new","boot","goofin"];
const testArr2 = ["not","the","same"];
const emptyArr = [];
const copyArr = ["new","boot","goofin"];

console.log("This assert should fail");
assertArraysEqual(testArr1,testArr2);
console.log("This assert should pass");
assertArraysEqual(testArr1,copyArr);
console.log("This assert should fail");
assertArraysEqual(testArr1,emptyArr);