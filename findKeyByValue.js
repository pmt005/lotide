
const findKeyByValue = function(inputObj, inputVal) {
  for (let key in inputObj) {
    if (inputObj[key] === inputVal) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;