/**
 *
 *
 *
 *
 *
 *
 */

function validSpacing(str) {
  let splat = str.split(' ')
  let arr = []
  for (let i = 0; i < splat.length; i++) {
    if (splat[i]) {
      arr.push(splat[i])
    }
  }
  return arr.join(' ') === str
}
console.log(validSpacing(' Hello world'))
