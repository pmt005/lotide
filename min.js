
const min = function(numbers) {
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
};

module.exports = min;

