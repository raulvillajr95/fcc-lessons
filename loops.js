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
function getAverage(arr, counter = arr.length - 1, total = 0) {
  if (counter <= 0) {
    total += arr[counter];
    return Math.floor(total / arr.length);
  } else {
    total += arr[counter];
    return getAverage(arr, counter - 1, total);
  }
}
console.log(getAverage([2, 2, 2, 2]));
