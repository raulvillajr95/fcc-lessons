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

function repeatChar(char, num) {
  if (num <= 1) return char;
  return char + repeatChar(char, num - 1);
}
// console.log(repeatChar('z', 3));

function contamination(text, char) {
  return char === '' || text === '' ? '' : repeatChar(char, text.length);
}
console.log(contamination('', 'z'));
