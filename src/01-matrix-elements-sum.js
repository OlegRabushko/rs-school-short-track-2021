/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
//
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const c = [];
  const a = c.concat.apply([], matrix);
  const b = a.map((el, i, arr) => {
    const arr2 = arr;
    if (el === 0) {
      arr2[i + matrix[0].length] = 0;
    }
    return el;
  });
  return b.reduce((acc, el) => acc + el, 0);
}
// console.log(getMatrixElementsSum(matrix));

module.exports = getMatrixElementsSum;
