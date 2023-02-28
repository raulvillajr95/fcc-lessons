/**
 *
 *
 *
 *
 *
 *
 *  every 10 challenges, checkout 'Largest prime factor'
 *  challenges myself to do all them in recursively
 */

// if looping, use recursion
function reverseSeq(n) {
  n <= 1;
  if (n <= 1) {
    return [n];
  } else {
    return [n].concat(reverseSeq(n - 1));
  }
}

// var decimals = [];
// var max = 20000;

// function _recurse() {
//   decimals.push(Math.floor(Math.random() * 10));
//   if (decimals.length === max) return;
//   return () => _recurse();
// }

// const trampoline =
//   (fn) =>
//   (...args) => {
//     let res = fn(...args);
//     while (typeof res === 'function') {
//       res = res();
//     }
//     return res;
//   };

// const recurse = trampoline(_recurse);

// recurse();

// console.log(decimals);
