// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const emoji = '\uD83D\uDE0D';
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

module.exports = assertEqual;