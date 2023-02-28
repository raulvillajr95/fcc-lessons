/**
 *
 *
 *
 *
 *
 *
 *  every 10 challenges, checkout 'Largest prime factor'
 *  challenges myself to do all them in recursively
 */

// if looping, use recursion
function countBy(x, n, arr = [], counter = x) {
  if (arr.length >= n) {
    return arr;
  } else {
    arr.push(x);
    return countBy(x + counter, n, arr, counter);
  }
}

console.log(countBy(1, 10));
