import slice from './slice.js';


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.allExceptLast([1, 2, 3]);  //=> [1, 2]
 *      R.allExceptLast([1, 2]);     //=> [1]
 *      R.allExceptLast([1]);        //=> []
 *      R.allExceptLast([]);         //=> []
 *
 *      R.allExceptLast('abc');  //=> 'ab'
 *      R.allExceptLast('ab');   //=> 'a'
 *      R.allExceptLast('a');    //=> ''
 *      R.allExceptLast('');     //=> ''
 */
var getAllExceptLast = slice(0, -1);
export default getAllExceptLast;