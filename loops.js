/**
 *
 *
 *
 *
 *
 *
 */

function toCamelCase(str) {
  let splat = str.split(/[-_]/g)
  let newStr = ""
  for (let i = 0; i < splat.length; i++) {
    if (i === 0) {
      newStr += splat[i]
    } else {
      newStr += splat[i][0].toUpperCase() + splat[i].slice(1)
    }
  }
  return newStr
}
console.log(camelCase("the-stealth-warrior"))
