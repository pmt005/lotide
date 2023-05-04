const emoji = '\uD83D\uDE0D';

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    let errorMsg = "Bad input";
    return errorMsg;
  }
  let compare1 = arr1.join();
  let compare2 = arr2.join();
  if (compare1 === compare2) {
    return true;
  }
  return false;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  
  return results;
};

const testSentence = "lighthouse in the house";
const result1 = letterPositions(testSentence);

assertEqual(eqArrays(result1["l"],[0]),true);
assertEqual(eqArrays(result1["h"],[3,5,15,18]),true);
assertEqual(eqArrays(result1["z"],[]),"Bad input");
assertEqual(eqArrays(result1["n"],[12]),true);

