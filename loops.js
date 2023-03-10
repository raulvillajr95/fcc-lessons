/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
function saleHotdogs(n) {
  return n < 5
    ? (price = n * 100)
    : n >= 5 && n < 10
    ? (price = n * 95)
    : (price = n * 90);
}
console.log(saleHotdogs(100));
