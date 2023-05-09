/**
 *
 *
 *
 *
 *
 *
 */

function range(a, b) {
  let r = []
  let step = b - a > 0 ? 1 : -1
  do{ 
    r.push(a)
  } while (step * (b - (a += step)) >= 0)
  return r
}

function isMonotone(arr) {
  if (arr.length <= 1) return true
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) return false
  }
  return true
}
console.log(isMonotone(range(1,10)))
console.log(isMonotone(range(4,12)))
console.log(isMonotone([5,5,5,5,5]))
console.log(isMonotone([]))
console.log(isMonotone(range(5,1)))
console.log(isMonotone([1,2,3,3,4,5]))
