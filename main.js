/**
 *
 *
 *
 *
 *
 *
 *
 */

// Recursive(slow)
// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fib(n - 2) + fib(n - 1);
//   }
// }

// Non recursive(fast)
function fib(n) {
  let arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  // return arr[n];
  return arr;
}
// console.log(fib(50));

function fib2(n, total = [0, 1]) {
  if (n <= 0) {
    return total[total.length - 2];
  } else {
    return fib2(
      n - 1,
      total.concat(total[total.length - 2] + total[total.length - 1])
    );
  }
}
console.log(fib2(77));

function randomUntilFive(result = 0, count = 0) {
  if (result === 5) {
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count++;
  randomUntilFive(result, count);
}
// randomUntilFive();
