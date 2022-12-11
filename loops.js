function createBoard() {
  let board = []
  // number of boards
  for (let g = 0; g < 1; g++) {
    // number of rows
    for (let h = 0; h < 6; h++) {
      let row = []
      // number of columns
      for (let i = 0; i < 7; i++) {
        row[i] = 0
      }
      board[h] = row;
      row = 0
    }
  }
  return board;
}
let count = 1
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 4; j++) {
//     let fullBoard = createBoard()
//     fullBoard[2-i][j] = 1
//     fullBoard[3-i][j+1] = 1
//     fullBoard[4-i][j+2] = 1
//     fullBoard[5-i][j+3] = 1
//     console.log(fullBoard, `Board ${count}`)
//     count += 1
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 6; j > 2; j--) {
//     let fullBoard = createBoard()
//     fullBoard[2-i][j] = 1
//     fullBoard[3-i][j-1] = 1
//     fullBoard[4-i][j-2] = 1
//     fullBoard[5-i][j-3] = 1
//     console.log(fullBoard, `Board ${count}`)
//     count += 1
//   }
// }

let fullBoard = createBoard()
fullBoard[0][0] = 1
fullBoard[1][0] = 1
fullBoard[2][0] = 1
fullBoard[3][0] = 1
console.log(fullBoard, 'Board 1')

let fullBoard2 = createBoard()
fullBoard2[1][0] = 1
fullBoard2[2][0] = 1
fullBoard2[3][0] = 1
fullBoard2[4][0] = 1
console.log(fullBoard2, 'Board 2')

let fullBoard3 = createBoard()
fullBoard3[2][0] = 1
fullBoard3[3][0] = 1
fullBoard3[4][0] = 1
fullBoard3[5][0] = 1
console.log(fullBoard3, 'Board 3')

/*
do the verticals
*/