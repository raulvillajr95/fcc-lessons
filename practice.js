let arr1 = [
  [1856, 498, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, 32],
  [5865, 5456, 3983, 6464, 9957, 4785, 3875, 3838, 4959, 1122, 7766, 2534],
  [23, 55, 67, 99, 265, 376, 232, 223, 4546, 564, 4544, 3434]
];

// Sort number array
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

// Sort number arrays within arrays
function sortArraysWithinArrays(arr) {
  let emp = []
  for (let i = 0; i < arr.length; i++) {
    emp.push(sortNum(arr1[i]))
  }
  return emp
}

// Medians
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

/* 3 - 2 */

let arr2 = medianOfEachArray(arr1)

let highest = 0

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > highest) {
    highest = arr2[i]
  }
}

console.log(`Agent ${arr2.indexOf(highest)} had the highest median sales`)

/*
ideas:
-first do 2 agents, 3 sales each
  sort first arr[0] only
  sort first 2
  get median of each
-sort by sales
-if even number of values,
  grab 2 middles
  add them and divide by 2
-return agent name

let sales = [
  [1856, 498, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, 32],
  [5865, 5456, 3983, 6464, 9957, 4785, 3875, 3838, 4959, 1122, 7766, 2534],
  [23, 55, 67, 99, 265, 376, 232, 223, 4546, 564, 4544, 3434]
]


for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
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
*/