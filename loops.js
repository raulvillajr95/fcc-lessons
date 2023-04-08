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

function houses(address, n) {
  let right = [];
  let left = [];
  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 === 0) {
      right.unshift(i);
    } else {
      left.push(i);
    }
  }
  return [right, left];
}
console.log(houses(0, 3));

function overTheRoad(address, n) {
  if (address % 2 === 0) {
    return (address - (n * 2 + 1)) / -1;
  } else {
    return -address + (n * 2 + 1);
  }
}
console.log(houses2(2, 3));
