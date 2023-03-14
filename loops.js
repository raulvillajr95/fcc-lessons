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
 * generate range of integers
 */

function usdcny(usd) {
  const cyn = (usd * 6.75).toFixed(2);
  return `${cyn} Chinese Yuan`;
}
console.log(usdcny(15));
