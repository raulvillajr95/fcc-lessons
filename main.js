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
  // console.log(counter);
  // debugger;
  if (counter <= 0) {
    if (arr1[i] < arr2[j]) {
      console.log(arr1[i], 'arr1 top');
      arr.push(arr1[i]);
      i += 1;
    } else if (arr2[j] <= arr1[i]) {
      console.log(arr2[j], 'arr2 top');
      arr.push(arr2[j]);
      j += 1;
    }
    return arr;
  } else {
    if (arr1[i] < arr2[j]) {
      console.log(arr1[i], 'arr1 bottom');
      console.log(arr1, 'arr1', i, 'i');
      arr.push(arr1[i]);
      i += 1;
    } else if (arr2[j] <= arr1[i]) {
      console.log(arr2[j], 'arr2 bottom');
      arr.push(arr2[j]);
      j += 1;
    }
    return mergeArrays(arr1, arr2, counter - 1, i, j, arr);
  }
}
// console.log(mergeArrays([1, 2, 3, 40, 50], [6, 7, 8, 9, 10]));

// function countdown(x) {
//   let y = 0;
//   while (x > 0) {
//     x = x - 5;
//     y = y + 1;
//   }
//   return y;
// }
// console.log(countdown(500));

function count(arrayA, lengthN) {
  if (lengthN === 1) {
    return 0;
  } else {
    let x = count(
      arrayA.slice(0, Math.floor(arrayA.length / 2)),
      arrayA.slice(0, Math.floor(arrayA.length / 2)).length
    );
    let y = count(
      arrayA.slice(Math.floor(arrayA.length / 2)),
      arrayA.slice(Math.floor(arrayA.length / 2)).length
    );
    let z = countSplitInv(arrayA, lengthN);
  }
  return x + y + z;
}

function countSplitInv(arr, lengthN) {
  // create my own function in O(n^2) if necessary
  // then O(n)
}
let arr1 = [1, 3, 5, 2, 4, 6];
console.log(countSplitInv(arr1, arr1.length));
