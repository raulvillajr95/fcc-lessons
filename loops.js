/**
 *
 *
 *
 *
 *
 *
 */

function convert(num) {
  if (num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
    return num.toString()
  }
  let message = ''
  if (num % 3 === 0) {
    message += 'Pling'
  }
  if (num % 5 === 0) {
    message += 'Plang'
  }
  if (num % 7 === 0) {
    message += 'Plong'
  }
  return message
}
console.log(convert(1))
console.log(convert(5))
console.log(convert(15))
