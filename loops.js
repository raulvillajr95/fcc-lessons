/**
 *
 *
 *
 *
 *
 *
 */

function steps(num) {
  let count = 1
  
  while(num != 1){
    if (num % 2 === 0) {
      num = num / 2
    } else if (num % 2 === 1) {
      num = (num * 3) + 1
    }
    count++
  }
  return count
}
console.log(collatz(12))
