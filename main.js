/**
 *
 *
 *
 *
 *
 *
 *
 */
let insert = function (arr, rightIn, val) {
  for (let i = rightIn; i >= 0; i--) {
    arr[i + 1] = arr[i];
    if (val >= arr[i + 1]) {
      arr[i + 1] = val;
      break;
    } else if (i === 0) {
      arr[i] = val;
    }
  }
};

var ex = [3, 5, 7, 11, 13, 2, 9, 6];

insert(ex, 4, 2);
// insert(ex, 5, 9);
// insert(ex, 6, 6);
console.log(ex);
