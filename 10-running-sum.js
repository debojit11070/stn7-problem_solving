// Problem 10: Running Sum of 1D Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const res = [];
  let total = 0;
  for (const x of nums) {
    total += x;
    res.push(total);
  }
  return res;
};

module.exports = runningSum;
