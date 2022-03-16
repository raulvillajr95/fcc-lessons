let x = function(x, y) {
  return x * y;
}

let z = (x, y) => x * y;

function checkPositive(arr) {
  return arr.every(currVal => currVal > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]));
