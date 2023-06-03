/**
 *
 *
 *
 *
 *
 *
 */

function isPangram(str) {
  let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
  let splat = str.toLowerCase().split('')
  let arr = []
  for (let i = 0; i < alphabet.length; i++) {
    if (!splat.includes(alphabet[i])) {
      return false
    }
  }
  return true
}
console.log(isPangram('abcdefghjklmnopqrstuvwxyz'))
