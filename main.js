/**
 *
 *
 *
 *
 *
 *
 */

// for loop(1st)
// function sumTo(n) {
//   let counter = 0;
//   for (let i = 1; i <= n; i++) {
//     counter += i;
//   }
//   return counter;
// }
// console.log(sumTo(100));

// Recursion(3rd)
function sumTo(n) {
  return n == 1 ? 1 : n + sumTo(n - 1);
}
console.log(sumTo(100));

// arithmetic progression(2nd)
// function sumTo(n) {
//   return (n * (1 + n)) / 2;
// }
// console.log(sumTo(100));
