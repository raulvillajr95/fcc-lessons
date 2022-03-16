let z = (x, y) => x * y;

function checkPositive(arr) {
  let positives = arr.filter(n => n > 0)
  return positives.some(currVal => currVal % 2 === 0)
}

console.log(checkPositive([-1, -2, -3, -4, -5]));

console.log(-4 % 2)
