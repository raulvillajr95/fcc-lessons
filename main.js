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
async function prime(n, number = [], primes = []) {
  number[0] = n;
  number = Number(number);
  if (n < 2) {
    // console.log(primes);
    return primes.length === 0;
  } else {
    await Promise.resolve(false);

    if (number % n === 0 && number != n) {
      // console.log(n);
      primes.push(n);
    }
    // console.log(n, number);
    return await prime(n - 1, number, primes);
  }
}
// prime(13195)
//   .then((sum) => console.log(sum))
//   .catch((err) => console.log(err.stack));

// list of prime factors
function primeFactors(n) {
  let primes = [];

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
  let primeFactors = [];
  for (let i = 0; i < primes.length; i++) {
    if (n % primes[i] == 0) {
      console.log(n / primes[i]);
    }
  }

  // return primes;
}
// console.log(primeFactors(100));
