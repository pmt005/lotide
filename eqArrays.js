const emoji = '\uD83D\uDE0D';

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(arr1, arr2) {
  let compare1 = arr1.join();
  let compare2 = arr2.join();
  if (compare1 === compare2) {
    return true;
  }
  return false;
};

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