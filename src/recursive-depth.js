const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth=0;
    this.array;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      this.depth = 1 + Math.max(0, ...arr.map(el=>this.calculateDepth(el)))
    } else {
      return 0;
    }
     return this.depth;
  }
}

const depthCalc = new DepthCalculator();
module.exports = {
  DepthCalculator
};
