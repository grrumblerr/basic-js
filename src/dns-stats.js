const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let result = {};
    let domainsArr = domains.map(el => el.split('.').reverse().map(el => '.' + el));
    for (let i = 0; i < domainsArr.length; i++) {
      for (let j = 0; j < domainsArr[i].length; j++) {
        let domainCurr = domainsArr[i].slice(0, j + 1).join('');
        if (!result[domainCurr]) {
          result[domainCurr] = 1;
        } else {
          result[domainCurr]++;
        }
      }
    }
    return result;
  }

module.exports = {
  getDNSStats
};
