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
 * Project Euler #5(if looping, use recursion)
 *
 * maybe 3 or more functions
 */

// Return smallest number that is divisible by numbers 1-20

function divisors(n, counter = 1, arr = [], arr2 = []) {
  if (n === 0) return [0];
  if (counter >= Math.sqrt(n)) {
    if (n % counter === 0) {
      arr.push(counter);
    }
    return [...arr, ...arr2];
  } else {
    if (n % counter === 0) {
      arr.push(counter);
      arr2.unshift(n / counter);
    }
    return divisors(n, counter + 1, arr);
  }
}
console.log(divisors(3628800));

// check for first 20 values [1-20]
// check only every 20 since it has to be divisible by 20
function checkFirst20(arr) {
  return arr.slice(0, 20).join('') === '1234567891011121314151617181920';
}

function loopThrough20s(counter = 0) {
  let divi = divisors(counter).slice(0, 20).join('');
  if (counter >= 1 && divi === '1234567891011121314151617181920') {
    console.log(divi, counter);
    return 'done';
  } else {
    console.log(divi, counter);
    return loopThrough20s(counter + 232792560);
  }
}
// console.log(loopThrough20s());
// maxes out at 149380
// the answer i got is 232792560

// console.log(divisors(146480));

function while20s() {
  counter = 0;
  let divi = divisors(counter).slice(0, 20).join('');
  while (divi != '1234567891011121314151617181920') {
    divi = divisors(counter).slice(0, 20).join('');

    console.log(divi, counter);
    counter += 2520;
  }
  // console.log(divi, counter, '');
  return 'done';
}
// console.log(while20s());

// instead of moving up by 20s, find a formula for a number divisible my [1-20]
