/*
Exercise 3-7

Find the Mode
*/

const ints = [1,1,1,1,1,2,2,3,3]

// Return single values
function singleValueArr(arr) {
  let emp = []
  for (let i = 0; i < arr.length; i++) {
    if (emp.includes(arr[i]) == false) {
      emp.push(ints[i])
    }
  }
  return emp
}

let singled = singleValueArr(ints)

// let counts = {}

// for (let i = 0; i < singled.length; i++) {
//   counts[singled[i]] = 0
// }

let empty = []

let count = 0
for (let i = 0; i < singled.length; i++) {
  for (let j = 0; j < ints.length; j++) {
    if (singled[i] == ints[j]) {
      //counts[singled[i]] += 1
      count += 1
    }
  }
  empty.push([singled[i], count])
  count = 0
}

//console.log(counts)

let last = []

let cnt = [,0]
for (let i = 0; i < empty.length; i++) {
  if (empty[i][1] > cnt[1]) {
    cnt = [empty[i][0],empty[i][1]]
  }
}
console.log(`The mode is ${cnt[0]}`)

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
  let cnt = [,0]
  for (let i = 0; i < empty.length; i++) {
    if (empty[i][1] > cnt[1]) {
      cnt = [empty[i][0],empty[i][1]]
    }
  }

  return cnt[0]
}

console.log(mode(ints))



/*
Ideas
-loop single integers through og list
  if int == number, add to counter
  with the counter you'll know how many times each int appears in og list
-return num or nums that has the highest counter
*/