const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const testArr1 = ["new","boot","goofin"];
const testArr2 = ["not","the","same"];
const emptyArr = [];
const copyArr = ["new","boot","goofin"];

console.log("This assert should pass");
assertEqual(eqArrays(testArr1,testArr2), false);
console.log("This next one should fail");
assertEqual(eqArrays(testArr1,testArr2), true);
console.log("This assert should pass");
assertEqual(eqArrays(testArr1,emptyArr), false);
console.log("This next one should fail");
assertEqual(eqArrays(testArr1,emptyArr), true);
console.log("This assert should pass");
assertEqual(eqArrays(testArr1,copyArr), true);