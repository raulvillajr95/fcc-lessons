/**
 *
 *
 *
 *
 *
 *
 *
 */

// let arr = [];
// for (let i = 0; i < 32; i++) {
//   arr.unshift(num % 2);
//   num = Math.floor(num / 2);
// }
// let counter = 0;
// for (let j = 0; j < arr.length; j++) {
//   counter += arr[j];
// }
// return counter;

function countBits(num) {
  let arr = [];
  while (Math.floor(num / 2) != 0) {
    arr.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  arr.unshift(num % 2);

  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += arr[i];
  }

  return counter;
}

console.log(countBits(13));

// 26
