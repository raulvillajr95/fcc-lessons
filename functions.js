let z = (x, y) => x * y;

function arrowF(x) {
  return y => z => y + x + z
}
console.log(arrowF(10)(20)(30));

function normalF(x) {
  return function normalF2(y) {
    return function normalF3(z) {
      return x + y + z;
    }
  }
}
console.log(normalF(10)(20)(30))
