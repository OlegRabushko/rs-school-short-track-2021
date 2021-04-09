/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const numbers = [];
  let b = n;
  while (b) {
    numbers.push(b % 10);
    b = Math.floor(b / 10);
  }
  for (let i = 0; i < numbers.length; i++) {
    let k = 0;
    for (let j = numbers.length - 1; j >= 0; j--) {
      if (j !== i) {
        k = k * 10 + numbers[j];
      }
    }
    result = Math.max(k, result);
  }
  return result;
}
module.exports = deleteDigit;
