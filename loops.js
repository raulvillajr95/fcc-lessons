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
 * then two years
 * then start looping it
 *  then do the base case
 */

function money(principal, interest, tax, desire) {
  let interestFirst;
  let interestAfTx;
  let final = principal;
  let count = 0;

  while (final < desire) {
    interestFirst = final * interest;
    interestAfTx = interestFirst - interestFirst * tax;
    final = final + interestAfTx;
    count += 1;
  }

  return count;
}
console.log(money(1000, 0.01625, 0.18, 1200));
