/*
Exercise 6-1
*/

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

function arraySumRecursiveExtraParams(integers, size, sum, currentIndex) {
  if (currentIndex == size) {
    return sum
  }
  sum += integers[currentIndex]
  return arraySumRecursiveExtraParams(integers, size, sum, currentIndex + 1)
}


function zeroCountRecursive(numbers, size) {
  if (size == 0) {
    return 0
  }
  let count = zeroCountRecursive(numbers, size-1)
  if (numbers[size-1] == 0) {
    count++
  }
  return count
}

// My function
function sumOfPositives(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += arr[i]
    }
  }

  return count
}

//console.log(sumOfPositives([-1,-2,1,2,3]))


function factorial(num) {
  if (num == 1 || num == 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

console.log(factorial(4))

function sumOfPositives1(arr) {
  let len = arr.length-1
  if (len == 1) {
    return arr[0]
  } else {
    return arr[len] + sumOfPositives1(arr.slice(0,len))
  }
}

console.log(sumOfPositives1([1,2,3,4,5]))

sumOfPositives1([1,2,3,4,5])
  5 + sumOfPositives([])