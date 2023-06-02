/**
 *
 *
 *
 *
 *
 *
 */

function uniqueInOrder(str) {
  if (str.length === 0) return []
  let lastUsed = str[0]
  let arr = [lastUsed]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastUsed) {
      continue
    } else {
      lastUsed = str[i]
      arr.push(lastUsed)
    }
  }
  return arr
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))
