const assertEqual = require('./assertEqual');

const head = function(argArr) {
  if (argArr.length === 0) {
    return undefined;
  }
  return argArr[0];
};


module.exports = head;