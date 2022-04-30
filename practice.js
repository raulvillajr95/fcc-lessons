/*
start with 8 #'s
after every new line,
  replace 1 '#' with ' ' space on each side
*/

function line() {
  return "########"
}

function squareLines () {
  for (let i = 1; i <= 8; i++) {
    console.log(line())
  }
}

function takeAway(str) {
  // replace first and last '#' with white space ' '
  return str.slice(2)
}

function addSpaces(str, am) {
  return ' '.repeat(am) + str + ' '.repeat(am)
}

function pyramid(str) {
  for (let i = 0; i <= 3; i++) {
    let sliced = str.slice(i*2)
    let replaced = addSpaces(sliced, i)
    console.log(replaced)
  }
}

/*
Exercise 2-2

the reverse of 2-1 is add to top
start with 2 #'s
after every new line,
  replace 1 '#' with ' ' space on each side
*/

function reversePyramid(str) {
  for (let i = 3; i >= 0; i--) {
    let sliced = str.slice(2 * i)
    let replaced = addSpaces(sliced, i)
    console.log(replaced)
  }
}

function bothPyramids() {
  reversePyramid(line())
  pyramid(line())
}

/*
Exercise 2-3

it might be the reverse of 2-2
start with 2 #'s
after every new line,
  replace 1 '#' with ' ' space on the middle
*/

// function insidePyramid(str) {
//   for (let i = 0; i <= 3; i++) {
//     let sliced = str.slice(2 * i)
//     let replaced = addSpaces(sliced, i)
//     console.log(replaced)
//   }
// }

function bothPyramidsInsideOut() {
  pyramid(line())
  reversePyramid(line())
}

function addSpaceInMiddle(str) {
  str.length/2
}

bothPyramids()