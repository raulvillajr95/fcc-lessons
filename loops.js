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

function nbYear(p0, percent, aug, p) {
  let start = p0;
  let years = 0;
  while (start < p) {
    // console.log(start, years);
    start += start * (percent / 100) + aug;
    years += 1;
  }
  return years;
}
console.log(nbYear(1500000, 0.25, 1000, 2000000));
// console.log(5 / 100);
