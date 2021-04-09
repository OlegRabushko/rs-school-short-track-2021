/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const obj = {};
  arr.map((el, i) => {
    if (el === -1) {
      obj[i] = el;
    }
    return el;
  });
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return a;
  }
  const c = arr.sort(compareNumeric).filter((el) => el > 0);

  Object.keys(obj).map((el) => {
    c.splice(Number(el), 0, -1);
    return el;
  });
  return c;
}
module.exports = sortByHeight;
