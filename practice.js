const punctuation = [28, 100, 78];

let sortedPunc = [];

for (let i = 0; i < punctuation.length; i++) {
  if (i == 0) {
    sortedPunc.push(punctuation[i])
  } else {
    for (let j = 0; j < sortedPunc.length; j++) {
      if ((punctuation[i] > sortedPunc[j] && punctuation[i] < sortedPunc[j+1]) || (i == punctuation.length-1 && punctuation[i] > sortedPunc[j])) {
        sortedPunc.push(punctuation[i])
        break
      } else if (punctuation[i] > sortedPunc[j] && punctuation[i] < sortedPunc[j+1]) {
        sortedPunc.splice(j+1,0,punctuation[i])
      } else {
        sortedPunc.unshift(punctuation[i])
        break
      }
    }
  }
}

/*
      if (punctuation[i] > sortedPunc[j]) {
        sortedPunc.splice(sortedPunc[j],0,punctuation[i])
      } else {
        sortedPunc.unshift(punctuation[i])
      }



Sorting by grade

ideas:
-sort number singles, but double layered e.g. [[87],[28],[100],[78],[84],[98],[75],[70]]
-sort the actual list

const punctuation = [
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
*/


let arr = [87, 28, 100, 78, 84, 98, 75, 70, 81, 68] 
let len = arr.length

let emp = []

let highest = 0

for (let j = 0; j < len; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i]
      console.log(arr[i])
    }
  }
  emp.unshift(highest)
  let index = arr.indexOf(highest)
  if (index > -1) {
    arr.splice(index, 1)
  }
  highest = 0
}

console.log(emp)