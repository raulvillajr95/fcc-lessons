/**
 *
 *
 *
 *
 *
 *
 */

function findUniq(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1
  }
  for(const prop in obj) {
    if (obj[prop] === 1) {
      return Number(prop)
    }
  }
  return obj
}
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
