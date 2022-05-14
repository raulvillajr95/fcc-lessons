// Map through 60, to be used with setInterval()
function loopInSeconds() {
  let all60 = [59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,  1, 0];
  let i = 0;

  return all60[i]
  i += 1
  if (all60[i] == 0) {
    return all60[i]
    i = 0
  }
}

// Sort numbers in array. Self-sustained function.
function sortNum(arr) {
  let len = arr.length;
  let emp = []
  let highest = 0
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i]
      }
    }
    emp.unshift(highest)
    let index = arr.indexOf(highest)
    if (index > -1) {
      arr.splice(index, 1)
    }
    highest = 0
  }
  return emp
}

// Sort number, but each number is under a layer e.g. [[1], [2], [3]]
function sortNumLayered(arr) {
  let len = arr.length

  let emp = []

  let highest = 0

  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] > highest) {
        highest = arr[i]
      }
    }
    emp.unshift(highest)
    let index = arr.indexOf(highest)
    if (index > -1) {
      arr.splice(index, 1)
    }
    highest = 0
  }
  return emp
}

// Reverse array
function reverseArr(arr) {
  let len = arr.length
  let emp = []
  let highest = 0
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] > highest) {
        highest = arr[i]
      }
    }
    emp.unshift(highest)
    let index = arr.indexOf(highest)
    if (index > -1) {
      arr.splice(index, 1)
    }
    highest = 0
  }
  return emp
}

// Sort Array by first index number e.g. [[1, 'Fred'], [2, 'Jesus']]
function sortNumFirstArray(arr) {
  let len = arr.length
  let emp = []
  let highest = [0,,]
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] > highest[0]) {
        highest = arr[i]
      }
    }
    emp.unshift(highest)
    let index = arr.indexOf(highest)
    if (index > -1) {
      arr.splice(index, 1)
    }
    highest = [0,,]
  }
  return emp
}

// e.g. [[1,2,3],[1,2,3],[1,2,3]]
function sortArraysWithinArrays(arr) {
  let emp = []
  for (let i = 0; i < arr.length; i++) {
    emp.push(sortNum(arr[i]))
  }
  return emp
}

// From sorted arrays, find the median of each array
function medianOfEachArray(arr1) {
  let arr2 = sortArraysWithinArrays(arr1)
  let emp = []
  for (let i = 0; i < arr2.length; i++) {
    let middle;
    if (arr2[i].length % 2 == 1) {
      middle = arr2[i][Math.floor(arr2[i].length/2)]
    } else if (arr2[i].length % 2 == 0) {
      middle = (arr2[i][(arr2[i].length/2)-1] + arr2[i][arr2[i].length/2]) / 2
    }
    emp.push(middle)
  }
  return emp
}

// Cipher, enter UPPERCASE word and receive a mix of words and punctuations
const characters = ['A','B','.','C','D','?','E','F','!','G','H',',','I','J',':','K','L',';','M','N','-','O','P','"','Q','R','=','S','T','+','U','V','~','W','X','@','Y','Z']
function returnNewChar(ett) {
  let ind = characters.indexOf(ett)
  if (ind > 30) {
    return characters[ind-31]
  } else if (ind <= 30) {
    return characters[ind+7]
  }
}
function cipher(word) {
  let ciphered = []
  for (let i = 0; i < word.length; i++) {
    ciphered.push(returnNewChar(word[i]))
  }
  return ciphered.join('')
}

// Remove one item from array
function removeOneFromArr(arr, ind) {
  let cop = [...arr]
  if (ind > -1) {
    cop.splice(ind, 1)
  }
  return cop
}

// Self-explanatory, enter array and return new array with same values but random order 
function randomizeCharsInArray(arr) {
  let rand = []
  let copChar = [...characters]
  for (let i = 0; i < arr.length; i++) {
    let randomInt = Math.floor(Math.random() * copChar.length)
    rand.unshift(copChar[randomInt])
    let firstChar = rand[0]
    copChar = removeOneFromArr(copChar, copChar.indexOf(firstChar))
  }
  return rand
}

// From array with multiple of the same values, return array with single values
function singleValueArr(arr) {
  let emp = []
  for (let i = 0; i < arr.length; i++) {
    if (emp.includes(arr[i]) == false) {
      emp.push(ints[i])
    }
  }
  return emp
}

// Self explanatory, get the mode of an array of integers
function mode(arr) {
  // Needs singleValueArr()
  let singled = singleValueArr(arr)
  let empty = []
  let count = 0
  // Gets Arrays with num of appearances
  for (let i = 0; i < singled.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (singled[i] == arr[j]) {
        count += 1
      }
    }
    empty.push([singled[i], count])
    count = 0
  }
  // From paired arrays, gets value with most appearances
  let cnt = [,0]
  for (let i = 0; i < empty.length; i++) {
    if (empty[i][1] > cnt[1]) {
      cnt = [empty[i][0],empty[i][1]]
    }
  }
  return cnt[0]
}

// Find the factorial of a given number
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1)
  }
}

// Return the sum of all positive integers in array
function sumOfPositives(arr) {
  let len = arr.length-1
  if (len == 0) {
    if (arr[0] > 0) {
      return arr[0]
    } else {
      return 0
    }
  }
  if (arr[len] > 0) {
    return arr[len] + sumOfPositives1(arr.slice(0,len))
  } else {
    return 0 + sumOfPositives1(arr.slice(0,len))
  }
}

// Return true if total # of 1's in array are odd
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