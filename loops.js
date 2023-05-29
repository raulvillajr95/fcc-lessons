/**
 *
 *
 *
 *
 *
 *
 */

function makeBackronym(str) {
  let arr = []
  for(let i = 0; i < str.length; i++) {
    arr.push(dict[str[i].toUpperCase()])
  }
  return arr.join(' ')
}
console.log(makeBackronym('dgm'))
