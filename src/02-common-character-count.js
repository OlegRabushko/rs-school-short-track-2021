/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let a = 0;
  const b = s1.split('').sort();
  const c = s2.split('').sort();
  const d = b.concat(c);
  for (let i = s1.length; i < s1.length + s1.length; i++) {
    if (d[i - s1.length] === d[i]) {
      a++;
    } else if (d[i - s1.length] !== d[i] && s2.length > 1) {
      i++;
      a++;
      if (d[i - s1.length] === d[i]) {
        a--;
      }
    }
  }
  return a;
}
module.exports = getCommonCharacterCount;
