/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 */

function validParentheses(str) {
  // odd numbers out
  // first needs to be '('
  // last needs to be ')'
  // '' emptys are valid
}
// true
// console.log(validParentheses('()'));
// ('())(()');
// console.log(validParentheses('((()))'));
// ('())(()');
// console.log(validParentheses('()()()'));
// ('())(()');
// console.log(validParentheses('(()())()'));
// ('())(()');
// console.log(validParentheses('()(())((()))(())()'));
// '())(()'.repeat(3);
// console.log('(()())())(()())(()'.length);

// false
// console.log(validParentheses(')(')); X
// console.log(validParentheses('()()(')); X
// console.log(validParentheses('((())')); X
// console.log(validParentheses('())(()'));
// console.log(validParentheses(')()')); X
// console.log(validParentheses(')')); X
let n = 77;
let f =
  (1 / Math.sqrt(5)) * ((1 + Math.sqrt(5)) / 2) ** n -
  (1 / Math.sqrt(5)) * ((1 - Math.sqrt(5)) / 2) ** n;
console.log(Math.round(f));
