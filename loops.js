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
 *
 * 3 = 180
 * 4 = 360
 *
 *
 */

function circleOfNumbers(n, firstNumber) {
  return firstNumber >= n / 2 ? firstNumber - n / 2 : n / 2 + firstNumber;
}
console.log(circleOfNumbers(10, 8));
