// Problem 18: Reverse String
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
};

export default reverseString;
