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


//TAKE UNTIL

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const resultsExp = [1,2,5,7,2];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,resultsExp);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const resultsExp2 = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,resultsExp2);
