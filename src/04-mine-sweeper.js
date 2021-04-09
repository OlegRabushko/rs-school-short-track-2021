/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const newArr = [];
  const a = newArr.concat.apply([], matrix);
  const numberArr = Array(a.length).fill(0);
  a.map((el, i) => {
    if (el === true) {
      numberArr[i] = 99;
      numberArr[i + 1]++;
      numberArr[i + 3]++;
      numberArr[i + 4]++;
      if (i > 0) {
        numberArr[i - 1]++;
        numberArr[i + 2]++;
      }
      if (i > 1) {
        numberArr[i - 2]++;
      }
      if (i > 2) {
        numberArr[i - 3]++;
      }
      if (i > 3) {
        numberArr[i - 4]++;
      }
    }
    return el;
  });
  a.map((el, i) => {
    if (el === true) {
      numberArr[i] = 1;
    }
    return el;
  });
  const k = numberArr.reduce((acc, el, i) => {
    if (i < 3) {
      acc[0].shift();
      acc[0].push(el);
    }
    if (i > 2 && i < 6) {
      acc[1].shift();
      acc[1].push(el);
    }
    if (i > 5 && i < 9 && acc.length > 2) {
      acc[2].shift();
      acc[2].push(el);
    }
    return acc;
  }, matrix);

  return k;
}
module.exports = minesweeper;
