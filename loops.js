/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 *
 * divisible by 5
 * not divisible by 10
 */

function sequenceSum(begin, end, step, count = 0) {
  // let count = 0;
  // for (let i = begin; i <= end; i += step) {
  //   count += i;
  // }
  // return count;
  if (begin >= end) {
    count += begin;
    return count;
  } else {
    count += begin;
    return sequenceSum((begin += step), end, step, count);
  }
}
console.log(sequenceSum(1, 5, 1));
