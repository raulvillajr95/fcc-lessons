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

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm[1] === 'Y' ? 'son' : 'daughter'
  }.`;
}
console.log(chromosomeCheck('XY'));
