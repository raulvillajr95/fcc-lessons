/**
 *
 *
 *
 *
 *
 *
 *
 */

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(pow(2, 3));

// function fib(n) {
//   // let arr = [1, 1];
//   if (n <= 0) {
//     return 0;
//   } else {
//     let x = [fib(n - 1), fib(n - 1) + 1];
//     return x;
//   }
// }
// console.log(fib(5));
