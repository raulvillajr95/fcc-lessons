/**
 *
 *
 *
 */

// divide two ints, return string with commas
//
function foo(num1, num2) {
  let num = num1 / num2;
  let strNum = String(num);
  if (num > 999999) {
    return (
      strNum.slice(0, -6) +
      "," +
      strNum.slice(-6, -3) +
      "," +
      strNum.slice(-3, strNum.length)
    );
  } else if (num > 999) {
    return strNum.slice(0, -3) + "," + strNum.slice(-3, strNum.length);
  }
}

console.log(foo(2000000, 2));
