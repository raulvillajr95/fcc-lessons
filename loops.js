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

function orderedCount(str) {
  let obj = {};
  let letters = [];
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) letters.push(str[i]);
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  let arr = [];
  for (let j = 0; j < letters.length; j++) {
    arr.push([letters[j], obj[letters[j]]]);
  }
  return arr;
}
console.log(orderedCount('233312'));
