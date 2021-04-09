/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let amount = 0;
  let a = '';
  let resultString = '';
  for (let i = 0; i < str.length; i++) {
    if (a === str[i]) {
      amount++;
    } else {
      resultString = resultString.concat(amount > 1 ? amount : '', a);
      a = str[i];
      amount = 1;
    }
  }
  return resultString.concat(amount > 1 ? amount : '', a);
}
module.exports = encodeLine;
