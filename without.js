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

const without = function (arr1, arr2) {
  let index;
  for (let item of arr2) {
    index = arr1.indexOf(item);
    if (index > -1) {
      arr1.splice(index, 1);
    }
  }
  return arr1;
};

const testArr = [1,2,3];
const testRemove = [0,1,9];
const expectedArr = [2,3];

const testArr2 = ['1','2','3'];
const testRemove2 = ['0','1','9'];
const expectedArr2 = ['2','3'];

//console.log(without(testArr, testRemove));
assertArraysEqual(without(testArr, testRemove), expectedArr);
assertArraysEqual(without(testArr2, testRemove2), expectedArr2);

