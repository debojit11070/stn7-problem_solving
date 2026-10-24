// Problem 6: Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
};

module.exports = positiveSum;
