const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr/* matrix */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  let cells = arr.join(',').split(',');
  for (let i=0; i<cells.length; i++) {
      if (cells[i] == '^^') {
        cats++;
      }
  }
  return cats;
}

module.exports = {
  countCats
};
