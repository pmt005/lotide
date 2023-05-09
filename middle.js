
const middle = function(array) {
  if (!Array.isArray(array)) {
    console.log("Bad input");
    return;
  }
  let returnArr = [];
  if (array.length <= 2) {
    return returnArr;
  } else if (array.length % 2 === 0) {
    returnArr.push(array[(array.length / 2) - 1]);
    returnArr.push(array[(array.length / 2)]);
    return returnArr;
  }
  returnArr.push(array[((array.length - 1) / 2)]);
  return returnArr;
};

module.exports = middle;



