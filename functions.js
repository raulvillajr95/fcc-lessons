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

// Find student record by id
const studentArray = [[87, 10001, "Fred"],[28, 10002, "Tom"],[100, 10003, "Alistair"],[78, 10004, "Sasha"],[84, 10005, "Erin"],[98, 10006, "Belinda"],[75, 10007, "Leslie"],[70, 10008, "Candy"],[81, 10009, "Aretha"],[68, 10010, "Veronica"]];
function studentRecordSearch(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == id) {
      return arr[i]
    }
  }
}

// random number between 1 and b
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

// Return a Array of primes from 2 to n
function primes(n) {
  let listy = []
  for (let i = 2; i <= n; i++) {
    let list = []
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        list.push(j)
      } else {
        continue
      }
    }
    if (list.length == 1) {
      listy.push(i)
    }
    list = []
  }
  return listy
}

// Removes optional arguments from Array
function removeFromArray(arr) {
  for (let i = 1; i < arguments.length; i++) {
    if (arr.indexOf(arguments[i]) == -1) {
      continue
    } else {
      arr.splice(arr.indexOf(arguments[i]), 1)
    }
  }
  return arr
}

// Take 2 integers and sum every number between(including 2 params)
function sumAll(num1, num2) {
  let count = 0;
  if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
    return 'ERROR'
  }
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      count += i
    }
  } else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      count += i
    }
  }
  return count
}

// Checks if a year is a leap year
function leapYears(year) {
  if ( year % 100 == 0 && year % 400 != 0) {
    return false
  } else if (year % 4 == 0) {
    return true
  } else {
    return false
  }
} 

// Converts farenheight temp to celcius with a precision of 0.1
function ftoc(deg) {
  let fullDecimal = (deg - 32) * (5/9)
  return parseFloat(fullDecimal.toFixed(1))
}

// Converts celcius temp to farenheight with a precision of 0.1
function ctof(deg) {
  let fullDecimal = (deg * (9/5)) + 32
  return parseFloat(fullDecimal.toFixed(1))
}

// Manual version of document.getElementsByTagName
function byTagName(node, tagName) {
  let list = []
  function inByTagName(nada) {
    if (nada.children == 0) {
      return
    }
    for (const child of nada.children) {
      if (child.nodeName.toLowerCase() == tagName) {
        list.push(child.nodeName.toLowerCase())
      }
      inByTagName(child)
    }
  }
  inByTagName(node)
  return list
}

// Simply adds 2 numbers
function add(a, b) {
  return a + b
};

// Simply subtracts 2 numbers
function subtract(a, b) {
	return a - b
};

// Adds an array of numbers
function sum(arr) {
	let total = 0;
  if (arr.length == 0) {
    return 0
  } else if (arr.length == 1) {
    return arr[0]
  }
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// Multiplies an array of numbers
function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

// Get 'a' to the power of 'b'
function power(a,b) {
	return a**b;
};

// Simply gets the factorial of a
function factorial(a) {
	if (a == 0) {
    return 1;
  }
  let total = 1;
  for (let i = 2; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Check if string is a plindrome
function palindromes(str) {
  let punctuation = [" ", "!", ",", ".", ""]
  let splat = []
  for (let i = 0; i < str.length; i++) {
    if (punctuation.includes(str[i])) {
      continue;
    } else {
      splat.push(str[i].toLowerCase());
    }
  }
  let reversed = splat.reverse().join('');
  let regular = splat.join('')

  return splat.join('') == splat.reverse().join('')
};

// Simply finds the 'Fibonacci' number
function fibonacci(a) {
  let fibList = [1, 1]

  if (a < 0) {
    return "OOPS"
  }

  for (let i = 0; i <= parseInt(a); i++) {
    let last = fibList[fibList.length-1]
    let secondLast = fibList[fibList.length-2]
    fibList.push(last + secondLast)
  }

  return fibList[a-1]
}