import _curry2 from './internal/_curry2.js';


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.getSum(2, 3);       //=>  5
 *      R.getSum(7)(10);      //=> 17
 */
var generateSum = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});
export default generateSum;