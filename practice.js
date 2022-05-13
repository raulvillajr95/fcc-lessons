// Computing the Sum of an Array of Integers

let arr1 = [1,2,3]

let len1 = arr1.length
let count = 0

// Recursion
function sum(arr, len) {
  if (len > 0) {
    len1 -= 1
    count += arr[len1]
    return sum(len1, len1)
  }
}

//console.log(sum(arr1, len1))

// For loop
let summ = 0
for (let i = 0; i < arr1.length; i++) {
  summ += arr1[i];
}
//console.log(summ)

// Sum of ints using iteration(the book solution)
function iterativeArraySum(integers, size) {
  let sum = 0
  for (let i = 0; i < size; i++) {
    sum += integers[i]
  }
  return sum
}

// Dispatcher for Sum of ints using recursion(the book solution)
function arraySumDelegate(integers, size) {
  if (size == 0) {
    return 0
  }
  let lastNumber = integers[size - 1]
  let allButLastSum = iterativeArraySum(integers, size - 1)
  return lastNumber + allButLastSum
}

// Actual recursive function that counts ints
function arraySumRecursive(integers, size) {
  if (size == 0) {
    return 0
  }
  let lastNumber = integers[size - 1]
  let allButLastSum = arraySumRecursive(integers, size - 1)
  return lastNumber + allButLastSum
}

console.log(arraySumRecursive([1,2,3,4,5], 5))