/*
map through 60
*/

function loopInSeconds() {
  let all60 = [59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,  1, 0]
  let i = 0

  console.log(all60[i])
  i += 1
  if (all60[i] == 0) {
    console.log(all60[i])
    i = 0
  }
}

setInterval(loopInSeconds, 300)

