/**
 *
 *
 *
 *
 *
 *
 */

function removeOneFromArr(arr, ind) {
  let cop = [...arr];
  if (ind > -1) {
    cop.splice(ind, 1);
  }
  return cop;
}

function comp(a, b) {
  if (a === null || b === null) return false
  for (let i = 0; i < b.length; i++) {
    let sqroot = Math.sqrt(b[i])
    console.log(sqroot)
    console.log(a, 'a')
    if (!a.includes(sqroot)) {
      return false
    } else {
      console.log(a.indexOf(sqroot)) 
      a = removeOneFromArr(a, a.indexOf(sqroot))
    }
  }

  return true
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
