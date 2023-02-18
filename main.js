/**
 *
 *
 *
 *
 *
 *
 *
 */

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }
// console.log(pow(2, 3));

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
// 0 = 0 + 0
//

// using 2 parameters
function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(77));
