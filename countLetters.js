const emoji = '\uD83D\uDE0D';

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emoji} Assertion Passed: [${actual}] === [${expected}]`);
  }
  return console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const testSentence = "lighthouse in the house";

const result1 = countLetters(testSentence);

assertEqual(result1["l"],1);
assertEqual(result1["h"],4);
assertEqual(result1["z"],undefined);
assertEqual(result1["5"],undefined);