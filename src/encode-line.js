const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  let count = 1;
  for (let i=0; i<str.length; i++) {
    if (str[i] != str[i+1]) {
      if (count>1) {
      res.push(count, str[i]);
      count = 1;
      } else res.push(str[i]);
    }
    else count++;
  }
  return res.join('');
}

module.exports = {
  encodeLine
};