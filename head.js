// FUNCTION copy from previous excercise
const emoji = '\uD83D\uDE0D';

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const head = function(argArr) {
  if (argArr.length === 0) {
    return undefined;
  }
  return argArr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 9);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");