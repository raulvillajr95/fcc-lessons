function sumAll(arr) {
  let sorted = arr.sort((a,b) => a - b);
  let nums = [];
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    nums.push(i);
  }
  return nums.reduce((a,b) => a + b);
}

console.log(sumAll([1, 4]));

/*
ideas:
-probably sort the given array
-get new array of range of numbers
-add up all numbers using reduce()
*/
