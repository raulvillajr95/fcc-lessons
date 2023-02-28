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
 * Project Euler #3
 * Largest prime factor
 *  get prime factors of a number
 *  is number divisible by 2, 3, 5, 7, 11, 13, 17, 19(prime numbers up to that number)
 *    if so, divide
 *    now is that number divisible
 *  get largest single number of all prime factors
 *
 * * jot down the process
 * Pseudo Code:
 * function primeFactors(number):
 *
 *
 */

/**
 *
 * For loop:
 *  is a number a prime
 *  list of prime factors
 *  biggest in list of prime factors
 *
 * While loop:
 *  is a number a prime
 *  list of prime factors
 *  biggest in list of prime factors
 *
 * Recursive:
 *  is a number a prime
 *  list of prime factors
 *  biggest in list of prime factors
 *
 */

// Is a number a prime
function prime(n) {
  let isPrime = true;

  // Trial division
  if (n === 2) return;
  let firstRun = [];
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    firstRun.push(i);
  }
  for (let j = 0; j < firstRun.length; j++) {
    if (n % firstRun[j] === 0) isPrime = false;
  }

  return isPrime;
}
// console.log(prime(15));

// list of primes
function primesList(n) {
  const arr = [];
  if (n > 2) arr[0] = 2;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (prime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(primesList(1000));

function primeFactors(n, arr = [], primes = primesList(n)) {
  if (n <= 2) {
    return arr;
  } else {
    for (let i = 0; i < primes.length; i++) {
      if (n % primes[i] == 0) {
        arr.push(primes[i]);
        return primeFactors(n / primes[i], arr, primes);
      }
    }
  }
}
console.log(primeFactors(10));

function primeFactors2(n, arr = [], primes = []) {
  if (n <= 2) {
    return arr;
  } else {
    // create list of primes
    for (let i = 2; i <= n; i++) {
      let list = [];
      for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
          list.push(j);
        } else {
          continue;
        }
      }
      if (list.length == 1) {
        primes.push(i);
      }
      list = [];
    }

    // get prime factors
    for (let i = 0; i < primes.length; i++) {
      console.log(primes);
      if (n % primes[i] == 0) {
        arr.push(primes[i]);

        return primeFactors2(n / primes[i], arr);
      }
    }
  }
}
// console.log(primeFactors2(50039));

/**
 * improve primeFactors speed
 *  it don't work around numbers 20
 */

// check if number is prime faster✅
// create list of primes faster
// get prime factors faster
//  possibly only check up to sqrt(length)
// get biggest number in arr
