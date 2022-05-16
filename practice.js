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

// Return number of occurrences of target in the array
function targetNumAppearances(arr, targetNum) {
  let len = arr.length-1
  if (len == 0) {
    if (arr[0] == targetNum) {
      return 1
    } else {
      return 0
    }
  }
  if (arr[len] == targetNum) {
    return 1 + targetNumAppearances(arr.slice(0,len), targetNum)
  } else {
    return 0 + targetNumAppearances(arr.slice(0,len), targetNum)
  }
}

// Return number of occurances of even numbers in the array
function findEvens(arr) {
  let len = arr.length-1
  if (len == 0) {
    if (arr[0] % 2 == 0) {
      return 1
    } else {
      return 0
    }
  }
  if (arr[len] % 2 == 0) {
    return 1 + findEvens(arr.slice(0,len))
  } else {
    return 0 + findEvens(arr.slice(0,len))
  }
}

/*
Exercise 7-3
Find record by student number
*/

const studentArray = [
  [87, 10001, "Fred"],
  [28, 10002, "Tom"],
  [100, 10003, "Alistair"],
  [78, 10004, "Sasha"],
  [84, 10005, "Erin"],
  [98, 10006, "Belinda"],
  [75, 10007, "Leslie"],
  [70, 10008, "Candy"],
  [81, 10009, "Aretha"],
  [68, 10010, "Veronica"]
];

function studentRecordSearch(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == id) {
      return arr[i]
    }
  }
}

console.log(studentRecordSearch(studentArray, 10005))