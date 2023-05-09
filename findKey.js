
const findKey = function(inputObj, callback) {
  for (let key in inputObj) {
    if (callback(inputObj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;