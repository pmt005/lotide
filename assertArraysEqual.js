const eqArrays = function(arr1, arr2) {
  let compare1 = arr1.join();
  let compare2 = arr2.join();
  if (compare1 === compare2) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  const emoji = '\uD83D\uDE0D';
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji} Assertion Passed: [${arr1}] === [${arr2}]`);
    return;
  }
  console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  return;
};

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