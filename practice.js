let arr = [
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

let len = arr.length

let emp = []

let highest = [0,0,'']

for (let j = 0; j < len; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > highest[1]) {
      highest = arr[i]
    }
  }
  emp.unshift(highest)
  let index = arr.indexOf(highest)
  if (index > -1) {
    arr.splice(index, 1)
  }
  highest = [0,0,'']
}
console.log(emp)

/*
Sorting by grade

ideas:
-sort doubles, numbers & names
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


let arr = [
  [87, "Fred"],
  [28, "Tom"],
  [100, "Alistair"],
  [78, "Sasha"],
  [84, "Erin"],
  [98, "Belinda"],
  [75, "Leslie"],
  [70, "Candy"],
  [81, "Aretha"],
  [68, "Veronica"]
];
*/