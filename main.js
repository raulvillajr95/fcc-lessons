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
  let arr = [];
  if (n > 2) {
    arr.push(2);
  }
  // Trial division
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(prime(100));

// list of primes
// function primesList(n) {
//   const arr = [2];
//   // if (n > 2) arr[0] = 2;
//   // if (prime(n)) return [n];
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (prime(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(primesList(100));

function primeFactors(n, arr = [], primes = prime(n)) {
  // if (prime(n)) return [n];
  // console.log(arr, 'tippy arr');
  if (n <= 2) {
    // console.log(arr, 'top arr');
    return arr;
  } else {
    // console.log(primes, 'one');
    for (let i = 0; i < primes.length; i++) {
      // console.log(primes, 'for');
      if (n % primes[i] == 0) {
        // console.log(arr, 'pf arr');
        // console.log(primes[i], 'pf primes[i]');
        // console.log(primes, 'pf primes');
        arr.push(primes[i]);
        return primeFactors(n / primes[i], arr, primes);
      }
    }
  }
}
console.log(primeFactors(600851475143));

function primeFactors2(n, arr = [], primes = []) {
  if (n <= 2) {
    return arr;
  } else {
    // create list of primes
    for (let i = 2; i <= Math.sqrt(n); i++) {
      let list = [];
      for (let j = 2; j <= Math.sqrt(n); j++) {
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
      console.log(arr, 'pf2 arr');
      console.log(primes[i], 'pf2 primes[i]');
      console.log(primes, 'pf2 primes');
      if (n % primes[i] == 0) {
        arr.push(primes[i]);

        return primeFactors2(n / primes[i], arr, primes);
      }
    }
  }
}
// console.log(primeFactors2(230));

/**
 * improve primeFactors speed
 *  it don't work around numbers 20
 *  possibly combine prime() and primesList()
 */

// check if number is prime faster✅
// create list of primes faster
// get prime factors faster
//  possibly only check up to sqrt(length)
// get biggest number in arr
