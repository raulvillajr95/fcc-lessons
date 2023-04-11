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

function nb_year(p0, percent, newInhab, p) {
  let start = p0;
  percent = percent / 100;

  let count = 0;
  while (start < p) {
    count += 1;
    start = Math.floor(start + start * percent + newInhab);
  }

  return count;
}
console.log(nb_year(1500000, 2.5, 10000, 2000000));
