const eqArrays = function(arr1, arr2) {
  let compare1 = arr1.join();
  let compare2 = arr2.join();
  if (compare1 === compare2) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  const goodEmoji = '\uD83D\uDE0D';
  const badEmoji = '\ud83d\udca9';
  if (eqArrays(arr1, arr2)) {
    console.log(`${goodEmoji} ${goodEmoji} ${goodEmoji} Assertion Passed: [${arr1}] === [${arr2}]`);
    return;
  }
  console.log(`${badEmoji}${badEmoji}${badEmoji} Assertion Failed: [${arr1}] !== [${arr2}]`);
  return;
};
// MAP FUNCTION
const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

/*
const testWords = ["ground", "control", "to", "major", "tom"];
const expectWords = ["g","c","t","m","t"];
const test2 = [];
const expect2 = [];
const failTest = ["This", "Should", "Fail"];
const results1 = map(testWords, word => word[0]);
const results2 = map(test2, word => word[0]);
const results3 = map(testWords, word => word[0]);
assertArraysEqual(results1,expectWords);
assertArraysEqual(results2,expect2);
assertArraysEqual(results1,failTest);
*/

