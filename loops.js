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
function removeEveryOther(arr, counter = 0, arr1 = []) {
  if (counter >= arr.length - 1) {
    if (counter % 2 === 0) arr1.push(arr[counter]);
    return arr1;
  }
  if (counter % 2 === 0) arr1.push(arr[counter]);
  return removeEveryOther(arr, counter + 1, arr1);
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
