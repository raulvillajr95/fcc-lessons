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
 * Project Euler #4(if looping, use recursion)
 *  create function that creates palindromes
 *    we aint testing numbers, we're creating them
 *      we already know what they look like, we just need to put them
 *        in an array
 *  create function to test for lots of palindromes
 *    possibly get prime factors and see which can be combined to be 3 digits
 *
 * maybe 3 or more functions
 */

// Return biggest number that 3 digits multiply to be palindrome

// palindromes 991000 to 997799
let palin = [991199, 992299, 993399, 994499, 995599, 996699, 997799];

// create palindromes from 100001 to 999999
function sixDigits(counter1 = 100, palins = []) {
  if (counter1 >= 999) {
    palins.push(
      Number(
        counter1.toString() + counter1.toString().split('').reverse().join('')
      )
    );
    return palins.reverse();
  } else {
    palins.push(
      Number(
        counter1.toString() + counter1.toString().split('').reverse().join('')
      )
    );
    return sixDigits(counter1 + 1, palins);
  }
}
// console.log(sixDigits());
const six = sixDigits();

// all five digit palindromes
function fiveDigits(counter1 = 100, palins = []) {
  if (counter1 >= 999) {
    palins.push(
      Number(
        counter1.toString() +
          counter1.toString().split('').reverse().join('').slice(1)
      )
    );
    return palins.reverse();
  } else {
    palins.push(
      Number(
        counter1.toString() +
          counter1.toString().split('').reverse().join('').slice(1)
      )
    );
    return fiveDigits(counter1 + 1, palins);
  }
}
// console.log(fiveDigits());

// find all factors of a number(they don't all have to be prime)
function factors(n, counter = 1, arr = [], arr2 = []) {
  if (counter >= Math.sqrt(n)) {
    if (n % counter === 0) {
      if (counter >= 100 && counter <= 999) arr.push(counter);
    }
    return [...arr, ...arr2];
  } else {
    if (n % counter === 0) {
      if (counter >= 100 && counter <= 999) arr.push(counter);
      if (n / counter >= 100 && n / counter <= 999) arr2.unshift(n / counter);
    }
    return factors(n, counter + 1, arr, arr2);
  }
}
console.log(factors(10000));

// function factrs(n) {
//   let arr = [];
//   let arr2 = [];
//   for (let i = 0; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       arr.push(i);
//       arr2.unshift(n / i);
//     }
//   }
//   return [...arr, ...arr2];
// }
// console.log(factrs(1000000));

// remove all numbers in array that aren't 3 digits

function primeList(n) {
  let arr = [];
  if (n > 2) {
    arr.push(2);
  }
  // Trial division
  for (let i = 3; i <= n; i += 2) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// function factors(
//   n,
//   arr = [],
//   arr2 = [],
//   primes = primeList(n),
//   counter = primes.length - 1
// ) {
//   console.log(primes);
//   if (counter <= 0) {
//     console.log(primes[counter], 'n l');
//     arr.unshift(primes[counter]);
//     arr.unshift(1);
//     arr2.push(n / primes[counter]);
//     arr2.push(n);
//     return arr2;
//   } else {
//     console.log(primes[counter]);

//     arr.unshift(primes[counter]);
//     console.log(primes[counter], 'n');
//     arr2.push(n / primes[counter]);

//     return factors(n, arr, arr2, primes, counter - 1);
//   }
// }
// console.log(factors(100));
