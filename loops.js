/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
function twoSort(arr) {
  const firstWord = arr.sort()[0];
  return firstWord.split('').join('***');
}
console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
);
