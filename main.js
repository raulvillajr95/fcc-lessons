/**
 *
 *
 *
 *
 *
 *
 *
 */

// Merge arrays
function merge(a, b) {
  let c = [];
  let i = 0;
  let j = 0;

  for (let k = 0; k < a.length + b.length; k++) {
    if (a[i] < b[j]) {
      c[k] = a[i];
      i++;
    } else if (b[j] < a[i]) {
      c[k] = b[j];
      j++;
    }
  }

  return c;
}
console.log(merge([2, 3, 5, 7], [2, 4, 6, 8]));
