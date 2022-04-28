const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let d = new Date(date);
  let month = d.getMonth();
  console.log(month);
}

getSeason(2019, 8, 22, 3, 0, 11, 500);

// module.exports = {
//   getSeason
// };
