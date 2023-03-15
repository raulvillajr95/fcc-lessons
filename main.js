/**
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * merge arrays
 * then reverse if reversed
 * remove duplicates
 */

function mergeArrays(
  arr1,
  arr2,
  counter = arr1.length * 2 - 1,
  i = 0,
  j = 0,
  arr = []
) {
  console.log(counter);
  // debugger;
  if (counter <= 0) {
    if (arr1[i] < arr2[j]) {
      // console.log()
      arr.push(arr1[i]);
      i += 1;
    } else if (arr2[j] <= arr1[i]) {
      arr.push(arr2[j]);
      j += 1;
    }
    return arr;
  } else {
    if (arr1[i] < arr2[j]) {
      // console.log()
      arr.push(arr1[i]);
      i += 1;
    } else if (arr2[j] <= arr1[i]) {
      arr.push(arr2[j]);
      j += 1;
    }
    return mergeArrays(arr1, arr2, counter - 1, i, j, arr);
  }
}
console.log(mergeArrays([1, 2, 3, 40, 50], [6, 7, 8, 9, 10]));
