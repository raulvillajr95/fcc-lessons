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
  if (str.length === 0) return true;
  let message;

  const firstHalf = str.slice(0, Math.floor(str.length / 2));
  const secondHalf = str.slice(Math.floor(str.length / 2));

  // console.log(firstHalf);
  // console.log(secondHalf);
  // console.log(firstHalf.match(/[(]/gi).length);
  // console.log(secondHalf.match(/[()]/gi).length);
  // console.log(str.slice(0, Math.floor(str.length / 2)), 'test');

  switch (true) {
    case str.length % 2 === 1:
      message = false;
      break;
    case str[0] === ')':
      message = false;
      break;
    case str[str.length - 1] === '(':
      message = false;
      break;
    case firstHalf.match(/[(]/gi).length !== secondHalf.match(/[(]/gi).length:
      message = false;
      break;
    default:
      message = true;
      break;
  }
  return message;
}
// true
console.log(validParentheses('()'));
console.log(validParentheses('((()))'));
console.log(validParentheses('()()()'));
console.log(validParentheses('(()())()'));
console.log(validParentheses('()(())((()))(())()'));

// false
// console.log(validParentheses(''));
// console.log(validParentheses(''));
// console.log(validParentheses(''));
// console.log(validParentheses(''));
// console.log(validParentheses('())(()'));
