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
    // let d = new Date(Date.parse(date));
    // let d = new Date(date);
    if (date == undefined) {
        return 'Unable to determine the time of year!';
    }

    if (Object.prototype.toString.call(date).slice(8, -1) !== 'Date') {
        throw new Error ('Invalid date!');
    }
    // if (Object.prototype.toString.call(date) !== '[object Date]') {
    //     throw new Error ('Invalid date!');
    // }
    if (!date.getTime ||
        date[Symbol.toStringTag] === 'Date') {
        throw new Error('Invalid date!')
        }    


        let month = date.getMonth();
        let season = '';
        // console.log(month);
        if (month == 0 || month == 1 || month === 11) {
            season = 'winter';
        }
        if (month == 2 || month == 3 || month == 4) {
            season = 'spring';
        }
        if (month == 5 || month == 6 || month == 7) {
            season = 'summer';
        }
        if (month == 8 || month == 9 || month == 10) {
            season = 'autumn';
        }
        // console.log(season);
        return season;
    }
//     else return 'Invalid date!';
// }

// getSeason(2019, 8, 22, 3, 0, 11, 500);

module.exports = {
  getSeason
};
