/**
 *
 *
 *
 *
 *
 *
 *  codewars/exercism/hackerrank challenges
 *  switch back and forth
 *  challenges myself to do all them in recursively
 */

// if looping, use recursion
function findSmallestInt(args, n = []) {
  n[0] = args.length - 1;
  let message;
  n = Number(n);
  if (n < 1) {
    // message = args[n - 1];
    if (args[n] < message) {
      message = args[n];
    }
    console.log(args);
    console.log(n);
    console.log(args[n]);
    console.log(message, 'in');
  } else {
    console.log(args);
    console.log(n);
    console.log(args[n]);

    if (args[n] < message) {
      message = args[n];
    }

    console.log(message);
    message = findSmallestInt(args, n - 1);
  }
  return message;
}
console.log(findSmallestInt([34, 15, 88, 2]));

// While
function findSmallestInt2(args) {
  let start = args[0];
  let i = 0;
  while (i < args.length) {
    if (args[i] < start) {
      start = args[i];
    }
    i++;
  }
  return start;
}
// console.log(findSmallestInt2([34, -345, -1, 100]));

// For
function findSmallestInt3(args) {
  let start = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < start) {
      start = args[i];
    }
  }
  return start;
}
// console.log(findSmallestInt3([34, -345, -1, 100]));

function squareSum(numbers, n = []) {
  if (numbers.length === 0) {
    return 0;
  }
  n[0] = numbers.length - 1;
  n = Number(n);
  if (n < 1) {
    return numbers[n] ** 2;
  } else {
    return numbers[n] ** 2 + squareSum(numbers, n - 1);
  }
}
console.log(squareSum([]));
