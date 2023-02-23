/**
 *
 *
 *
 *
 *
 *
 *
 */

function replicate(reps, num) {
  if (reps <= 0) return [];
  if (reps == 1) {
    return [num];
  } else {
    return [num].concat(replicate(reps - 1, num));
  }
}
console.log(replicate(2, 5));
