/**
 *
 *
 *
 *
 *
 *
 *
 */

function findFirstNonDuplicate(str) {
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let j = 0; j < str.length; j++) {
    const char = str[j];
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}
console.log(findFirstNonDuplicate('minimum'));
