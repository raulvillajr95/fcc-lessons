/**
 *
 *
 *
 *
 *
 *
 */

function add(num) {
  return num + 1
}
function mult(num) {
  return num * 30
}

function chain(num, arr) {
  for (let i = 0;i < arr.length;i++) {
    num = arr[i](num)
  }
  return num
}
console.log(chain(2, [add, mult]))
