// FUNCTION IMPLEMENTATION
const emoji = '\uD83D\uDE0D';

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(emoji + 'Assertion Passed: [' + actual + "] === [" + expected + "]");
  }
  return console.log("Assertion Failed: [" + actual + "] !== [" + expected + "]");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1,5);