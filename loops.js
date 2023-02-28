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
function findAverage(arr, counter = arr.length - 1, total) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  if (counter <= 0) {
    total = total + arr[counter];
    console.log(total);
    return total / arr.length;
  } else {
    if (total === undefined) {
      total = 0;
    }
    total = total + arr[counter];
    console.log(total);
    return findAverage(arr, counter - 1, total);
  }
}

console.log(findAverage([96]));
