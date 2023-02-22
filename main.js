/**
 *
 *
 *
 *
 *
 *
 *
 */

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() * productOfArray(arr);
  }
}

console.log(productOfArray([1, 2, 3, 10]));
