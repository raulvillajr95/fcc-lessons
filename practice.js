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

/*
ONE STEP AT A TIME

First, insert spaces in middle
then level it with spaces on the sides
  maybe just spaces on the left side??
*/

function addSpaceInMiddle(str, num) {
  let middle = (str.length/2)
  let inserted = str.slice(0,middle) + ' '.repeat(num) + str.slice(middle)
  return inserted
}

function addSpaceInMiddle2Lines() {
  for (let i = 3; i >= 0; i--) {
    console.log(addSpaceInMiddle('0123456789', i))
  }
  for (let i = 0; i <= 3; i++) {
    console.log(addSpaceInMiddle('0123456789', i))
  }
}

function spaceInMidWDecrease() {
  let cnt = 5
  let spc = 0
  for (let i = 3; i >= 0; i--) {
    cnt -= 1
    let sliced = '##########'.slice(cnt*2)
    console.log(" ".repeat(spc) + addSpaceInMiddle(sliced , i*4))
    spc +=1
  }

  // let cnt2 = 5
  // for (let i = 0; i <= 3; i++) {
  //   cnt2 -= 1
  //   let sliced = '##########'.slice(cnt*2)
  //   console.log(addSpaceInMiddle(sliced , i*4))
  // }

  let spc2 = 3
  for (let i = 0; i <= 3; i++) {
    let sliced = "########".slice(i*2)
    //let replaced = addSpaces(sliced, i)
    console.log(' '.repeat(spc2) + addSpaceInMiddle(sliced, i*4))
    spc2 -=1
  }
}

function addLeftSpaceOnce(str) {
  return ' ' + str
}

spaceInMidWDecrease()