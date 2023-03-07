/**
 *
 *
 *
 *
 *
 *
 *
 */

function power(x, n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n);
  }
  // recursive case: n is odd
  if (n % 2 === 1) {
    return x * power(x, n - 1);
  }
  // recursive case: n is even
  if (n % 2 === 0) {
    var y = power(x, n / 2);
    return y * y;
  }
}
console.log(power(5, 3));
