/**
 *
 *
 *
 *
 *
 *
 *
 */

// Fibonacci sequence(for)
function fibonacci1(n) {
  let arr = [1, 2];
  let message;
  if (n <= 2) {
    message = arr[n - 1];
  } else {
    for (let i = 0; i < n - 2; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      message = arr[arr.length - 1];
    }
  }
  return message;
}
// console.log(fibonacci1(4));

// Fibonacci even(for)

// Fibonacci sequence(while)
function fibonacci2(n) {
  let arr = [1, 2];
  let message;
  if (n <= 2) {
    message = arr[n - 1];
  } else {
    let i = 0;
    while (i < n - 2) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      message = arr[arr.length - 1];
      i++;
    }
  }
  return message;
}
// console.log(fibonacci2(10));

// Fibonacci even(while)

// Fibonacci sequence(recursive)
function fibonacci3(n, arr = [1, 2]) {
  let message;
  if (n <= 2) {
    message = arr[n - 1];
  } else {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    message = fibonacci3(n - 1, arr) + arr[n - 3];
  }
  console.log(arr);
  return message;
}
console.log(typeof fibonacci3(77));

// Fibonacci even(recursive)
