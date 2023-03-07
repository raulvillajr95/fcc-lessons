/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
function divisibleBy(numbers, divisor, counter = numbers.length - 1, arr = []) {
  if (numbers[counter] % divisor === 0) arr.unshift(numbers[counter]);
  if (counter <= 0) {
    return arr;
  } else {
    return divisibleBy(numbers, divisor, counter - 1, arr);
  }
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
