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
 *  get largest single number of all prime factors
 *
 * * jot down the process
 * Pseudo Code:
 * function primeFactors(number):
 *
 *
 */

function primes(n) {
  let listy = [];
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
      listy.push(i);
    }
    list = [];
  }
  return listy;
}
// console.log(primes(3));
