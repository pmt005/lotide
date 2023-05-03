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

const assertArraysEqual = function(arr1, arr2) {
  
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji} Assertion Passed: [${arr1}] === [${arr2}]`);
    return;
  }
  console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  return;
};

const middle = function(array) {
  if (!Array.isArray(array)) {
    console.log("Bad input");
    return;
  }
  let returnArr = [];
  if (array.length <= 2) {
    return returnArr;
  } else if (array.length % 2 === 0) {
    returnArr.push(array[(array.length / 2) - 1]);
    returnArr.push(array[(array.length / 2)]);
    return returnArr;
  }
  returnArr.push(array[((array.length - 1) / 2)]);
  return returnArr;
};

let test1 = [0];
let test2 = [0,1];
let test3 = [0,1,2];
let test4 = [0,1,2,3];
let test5 = ["one","two","three","four","five"];
let test6 = "stuff";

let expect1 = [];
let expect2 = [];
let expect3 = [1];
let expect4 = [1,2];
let expect5 = ["three"];
let expect6 = undefined;


console.log("EXPECTING 6 PASSES");
assertArraysEqual(middle(test1),expect1);
assertArraysEqual(middle(test2),expect2);
assertArraysEqual(middle(test3),expect3);
assertArraysEqual(middle(test4),expect4);
assertArraysEqual(middle(test5),expect5);
assertEqual(middle(test6),expect6);



