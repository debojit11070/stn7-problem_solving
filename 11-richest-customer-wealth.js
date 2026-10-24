// Problem 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (const row of accounts) {
    let sum = 0;
    for (const v of row) sum += v;
    if (sum > max) max = sum;
  }
  return max;
};

module.exports = maximumWealth;
