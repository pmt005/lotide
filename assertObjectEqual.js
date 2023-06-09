const emoji = '\uD83D\uDE0D';

const eqArrays = function(arr1, arr2) {
  let compare1 = arr1.join();
  let compare2 = arr2.join();
  if (compare1 === compare2) {
    return true;
  }
  return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  //check same number of keys
  if (arr1.length !== arr2.length) {
    return false;
  }

  //check that the keys are the same (order doesn't matter)
  let foundCounter = [];
  for (let tempKey1 of arr1) {
    for (let tempKey2 of arr2) {
      if (tempKey1 === tempKey2) {
        foundCounter.push("found");
        break;
      }
    }
  }

  //proceed if all keys are found
  //compare values
  if (foundCounter.length === arr1.length) {
    for (let tempKey1 of arr1) {
      //check if value stored is an array and if true compare using eqArray
      if (Array.isArray(object1[tempKey1])) {
        if (eqArrays(object1[tempKey1], object2[tempKey1]) === false) {
          return false;
        }
      } else if (object1[tempKey1] !== object2[tempKey1]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`${emoji} Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    return;
  }
};

const shirtObject = { color: ["red", "blue"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red", "blue"] };
assertObjectsEqual(shirtObject, anotherShirtObject);