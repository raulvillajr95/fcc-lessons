/**
 *
 *
 *
 *
 *
 *
 */

function brk(str) {
  let arr = []
  let start = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() || i === str.length - 1) {
      console.log(str[i])
      console.log(str.substring(start, i))
      arr.push(str.substring(start, i))
      start = i
      break
    }
  }

  for (let i = start+1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() || i === str.length - 1) {
      console.log(str[i])
      console.log(str.substring(start, i+1))
      arr.push(str.substring(start, i))
      start = i
    }

  }

  return arr.join(' ')
}
console.log(brk('camelCasingTest'))
