/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const func = (acc, el, count = 0) => {
    const updatedString = el + (!count ? '' : `(${count})`);
    if (!acc.includes(updatedString)) {
      acc.push(updatedString);
    } else {
      func(acc, el, count + 1);
    }
    return acc;
  };
  return names.reduce((acc, el) => (func(acc, el)), []);
}
module.exports = renameFiles;
