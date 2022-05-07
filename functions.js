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

// Sort numbers in array
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