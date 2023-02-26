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

// Fibonacci summed(for)
function fibonacciSummed1(n) {
  let arr = [1, 2];
  let message = 3;
  if (n <= 1) {
    message = 1;
  } else if (n <= 2) {
    message = 3;
  } else {
    for (let i = 0; i < n - 2; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      message += arr[arr.length - 1];
    }
  }
  return message;
}
// console.log(fibonacciSummed1(10));

// Fibonacci even(for)
function fibonacciEven1(n) {
  let arr = [1, 2];
  let message = 2;
  if (n <= 1) {
    message = 0;
  } else if (n <= 2) {
    message = 2;
  } else {
    for (let i = 0; i < n - 2; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      if (arr[arr.length - 1] % 2 === 0) {
        message += arr[arr.length - 1];
      }
      // console.log(arr);
    }
  }
  return message;
}
// console.log(fibonacciEven1(1));

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

// Fibonacci summed(while)
function fibonacciSummed2(n) {
  let arr = [1, 2];
  let message = 3;
  if (n <= 1) {
    message = 1;
  } else if (n <= 2) {
    message = 3;
  } else {
    let i = 0;
    while (i < n - 2) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      message += arr[arr.length - 1];
      i++;
    }
  }
  return message;
}
// console.log(fibonacciSummed2(10));

// Fibonacci even(while)
function fibonacciEven2(n) {
  let arr = [1, 2];
  let message = 2;
  if (n <= 1) {
    message = 0;
  } else if (n <= 2) {
    message = 2;
  } else {
    let i = 0;
    while (i < n - 2) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      if (arr[arr.length - 1] % 2 === 0) {
        message += arr[arr.length - 1];
      }
      i++;
    }
  }
  return message;
}
// console.log(fibonacciEven2(40));

// Fibonacci sequence(recursive)
function fibonacci3(n, arr = [1, 2]) {
  let message;
  if (n <= 2) {
    message = arr[n - 1];
  } else {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    message = fibonacci3(n - 1, arr) + arr[n - 3];
  }
  return message;
}
// console.log(fibonacci3(77));

// Fibonacci summed(recursive)
function fibonacciSummed3(n, arr = [1, 2]) {
  let message = 3;
  if (n <= 1) {
    message = arr[0];
  } else if (n <= 2) {
    message = arr[0] + arr[1];
  } else {
    debugger;
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    message = arr[arr.length - 1];
    message += fibonacciSummed3(n - 1, arr);
  }
  // console.log(arr);
  return message;
}
// console.log(fibonacciSummed3(10));

// Fibonacci even(recursive)
// only loopig once
function fibonacciEven3(n, arr = [1, 2]) {
  let message = 0;
  if (n <= 1) {
    message = 0;
  } else if (n <= 2) {
    message = 2;
  } else {
    debugger;
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    if (arr[arr.length - 1] % 2 === 0) {
      message = arr[arr.length - 1];
      console.log('even');
    }
    message += fibonacciEven3(n - 1, arr);
  }
  console.log(arr, 'in');
  return message;
}
console.log(fibonacciEven3(10), 'end');
