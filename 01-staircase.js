// Problem 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
  const rows = [];
  for (let i = 1; i <= n; i++) rows.push(' '.repeat(n - i) + '#'.repeat(i));
  return rows.join('\n');
};

module.exports = staircase;
