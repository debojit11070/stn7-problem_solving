// Problem 3: Time Conversion
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
  const period = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(':');
  let h = Number(hh) % 12;
  if (period === 'PM') h += 12;
  return `${String(h).padStart(2, '0')}:${mm}:${ss}`;
};

export default timeConversion;
