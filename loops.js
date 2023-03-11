/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
let numLong1 =
  3141592653589793238462643383279502884197169399375105820974944592n;
let numLong2 =
  2718281828459045235360287471352662497757247093699959574966967627n;
// console.log(num1 * num2);
// console.log(num1.toString().length);

// manually first, then as a function
let x = 5678;
let y = 1234;
let a = 56;
let b = 78;
let c = 12;
let d = 34;
let n = x.toString().length;
let step1 = a * c;
let step2 = b * d;
let step3 = (a + b) * (c + d);
// step4 = step3 - step2 - step1
let step4 = (a + b) * (c + d) - b * d - a * c;
// step 5 =
let step5 = step1 * 10 ** n + step2 + step4 * 10 ** (n / 2);
// console.log(step5);

let x2 = 10 ** (n / 2) * a + b;
let y2 = 10 ** (n / 2) * c + d;
let longX2Y2Star = 10 ** n * (a * c) + 10 ** (n / 2) * (a * d + b * c) + b * d;
// console.log(x2 * y2 === x * y);
// console.log(longX2Y2 === x * y);
// console.log(10 ** (n / 2));

function karatsuba(num1, num2) {
  let n = num1.toString().length;
  console.log(n);
  const firstHalf = (num) => {
    return BigInt(
      num
        .toString()
        .split('')
        .slice(0, n / 2)
        .join('')
    );
  };
  const secondHalf = (num) => {
    return BigInt(
      num
        .toString()
        .split('')
        .slice(n / 2)
        .join('')
    );
  };
  let a = firstHalf(num1);
  let b = secondHalf(num1);
  let c = firstHalf(num2);
  let d = secondHalf(num2);

  // Star
  return (
    BigInt(10) ** BigInt(n) * (a * c) +
    BigInt(10) ** (BigInt(n) / BigInt(2)) * (a * d + b * c) +
    b * d
  );
}
console.log(karatsuba(numLong1, numLong2));
