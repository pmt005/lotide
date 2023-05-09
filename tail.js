
const tail = function(argArr) {
  if (argArr.length <= 1) {
    let newArr = [];
    return newArr;
  }
  return argArr.slice(1);
};

module.exports = tail;