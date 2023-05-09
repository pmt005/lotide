const assertEqual = function(actual, expected) {
  const emoji = '\uD83D\uDE0D';
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const throwAway = function(key) {
  if (key['age'] < 40) {
    return true;
  }
};

const findKey = function(inputObj, callback) {
  for (let key in inputObj) {
    if (callback(inputObj[key])) {
      return key;
    }
  }
  return undefined;
};

let users1 = {
  'barney': { 'age': 36, 'active': true },
  'fred': { 'age': 40, 'active': false },
  'pebbles': { 'age': 1, 'active': true }
};
let users2 = {
  'barney': { 'age': 41, 'active': true },
  'fred': { 'age': 40, 'active': false },
  'pebbles': { 'age': 1, 'active': true }
};

assertEqual((findKey(users1, throwAway)), 'barney');
assertEqual((findKey(users2, throwAway)), 'pebbles');