/**
 *
 *
 *
 */

function staircase(num) {
  for (let i = 0; i < num; i++) {
    let hashLine = [];
    for (let j = 0; j < num; j++) {
      if (i >= -j + (num - 1)) {
        hashLine.push("#");
      } else {
        hashLine.push(" ");
      }
      // console.log(j + 3, i);
    }
    console.log(hashLine.join(""));
  }
}

staircase(15);

// [00' ', 01' ', 02' ', 03'#']
// [10' ', 11' ', 12'#', 13'#']
// [20' ', 21'#', 22'#', 23'#']
// [30'#', 31'#', 32'#', 33'#']
// [y, x] = [i, j]

// Flipped(x axis)
// [30'#', 31'#', 32'#', 33'#']
// [20' ', 21'#', 22'#', 23'#']
// [10' ', 11' ', 12'#', 13'#']
// [00' ', 01' ', 02' ', 03'#']
