/**
 *
 *
 *
 *
 *
 *
 */

function descendingOrder(n) {
  const part = String(n).split("");
  return Number(part.sort().reverse().join(""));
}

// console.log(descendingOrder(42145));
