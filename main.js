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
// console.log(factors(10000));

// just run through six digit palindromes from top down and look at the 3
// digit numbers

function runThrough(arr, counter = 0) {
  let fct = factors(arr[counter]);
  if (counter >= 100) {
    if (fct.length >= 2) console.log(multiplyAllNumbers(fct, arr[counter]));
    return 'Done';
  } else {
    if (fct.length >= 2) console.log(multiplyAllNumbers(fct, arr[counter]));
    // console.log(multiplyAllNumbers(fct))
    return runThrough(arr, counter + 1);
  }
}
console.log(runThrough(six));
// Officially found it, 913 * 993 = 906609

function isPalindrome(int) {
  return (
    int.toString().split('').join('') ===
    int.toString().split('').reverse().join('')
  );
}
// console.log(isPalindrome(999));

function multiplyAllNumbers(arr, palin, counter = 0) {
  // console.log(arr.length, 'len');
  // console.log(counter, 'cnt');
  if (counter >= arr.length) {
    return 'Done';
  } else {
    // console.log('yo');
    for (let i = counter; i < arr.length; i++) {
      // console.log('so');
      // console.log(arr[counter], arr[i]);
      // console.log(arr[counter] * arr[i]);
      if (arr[counter] * arr[i] === palin) {
        console.log(arr[counter], arr[i], arr[counter] * arr[i]);
      }
    }
    return multiplyAllNumbers(arr, palin, counter + 1);
  }
}
// console.log(
//   multiplyAllNumbers([
//     111, 117, 143, 189, 231, 259, 273, 297, 333, 351, 407, 429, 481, 693, 777,
//     819, 999,
//   ])
// );
