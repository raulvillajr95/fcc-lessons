/**
 *
 *
 *
 *
 *
 *
 */
function letterToNumber(letter) {
  if (letter === ' ') return 0;
  return letter.toLowerCase().charCodeAt(0) - 96;
}

function wordValue(arr) {
  let scores = [];
  for (let i = 0; i < arr.length; i++) {
    let wordScore = 0;
    for (let j = 0; j < arr[i].length; j++) {
      wordScore += letterToNumber(arr[i][j]);
    }
    scores.push(wordScore * (i + 1));
  }
  return scores;
}
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']));
