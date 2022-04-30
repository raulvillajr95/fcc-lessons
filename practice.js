/*
start with 8 #'s
after every new line,
  replace 1 '#' with ' ' space on each side
*/

function line() {
  return "########"
}

function squareLines () {
  for (let i = 1; i <= 4; i++) {
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
    let sliced = str.slice(2 * i)
    let replaced = addSpaces(sliced, i)
    console.log(replaced)
  }
}

pyramid(line())