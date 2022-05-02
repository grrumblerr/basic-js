const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('No implemented');
  // remove line with error and write your code here
  let turns = Math.pow(2, disksNumber)-1;
  // console.log(turns);
  let time = Math.trunc(turns*3600/turnsSpeed);
  // console.log(time);
  // let res = [];
  // let res_turns = [];
  // let res_time = [];
  // res_turns.push('turns', turns);
  // res.push(res_turns);
  // res_time.push('seconds', time);
  // res.push(res_time);
  // console.log(res_turns);
  // console.log(res_time);
  
  // console.log(res);
  // res = Object.fromEntries(res);
  // console.log(res);

  return {'turns': turns,
          'seconds': time};
}

module.exports = {
  calculateHanoi
};
