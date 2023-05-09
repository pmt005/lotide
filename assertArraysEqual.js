const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const emoji = '\uD83D\uDE0D';
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji} Assertion Passed: [${arr1}] === [${arr2}]`);
    return;
  }
  console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  return;
};

module.exports = assertArraysEqual;