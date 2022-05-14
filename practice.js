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



function factorial(num) {
  if (num == 1 || num == 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

// Odd # of 1's return true
function oddBinaries(arr) {
  let len = arr.length-1
  if (len == 0) {
    return arr[0]
  }
  let count = arr[len] + oddBinaries(arr.slice(0,len))
  return count%2 == 1
}

console.log(oddBinaries([1,0,1]))
console.log(oddBinaries([1,1,1,0]))