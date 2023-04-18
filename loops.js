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

// function potatoes(p0, w0, p1) {
//   let p0Per = p0 / 100;
//   let p1Per = p1 / 100;
//   let m = w0 * (1 - p0Per);
//   let w = (p1Per * m) / (1 - p1Per);
//   let t = w + m;
//   return t;
// }

// function potatoes(x, y, z) {
//   return Math.trunc(
//     ((z / 100) * (y * (1 - x / 100))) / (1 - z / 100) + y * (1 - x / 100)
//   );
// }

function potatoes(x, y, z) {
  return Math.trunc((100 * y - x * y) / (100 - z));
}
console.log(potatoes(82, 127, 80));
