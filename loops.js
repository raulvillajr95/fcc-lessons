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

// Empty Board 1
let fullBoard = createBoard()
fullBoard[2][0] = 1
fullBoard[3][1] = 1
fullBoard[4][2] = 1
fullBoard[5][3] = 1
console.log(fullBoard, "Board 1")

// Empty Board 2
let fullBoard2 = createBoard()
fullBoard2[1][0] = 1
fullBoard2[2][1] = 1
fullBoard2[3][2] = 1
fullBoard2[4][3] = 1
console.log(fullBoard2, "Board 2")

// Empty Board 3
let fullBoard3 = createBoard()
fullBoard3[0][0] = 1
fullBoard3[1][1] = 1
fullBoard3[2][2] = 1
fullBoard3[3][3] = 1
console.log(fullBoard3, "Board 3")


for (let i = 0; i < 3; i++) {
  let fullBoard = createBoard()

  fullBoard[2][0] = 1
  fullBoard[3][1] = 1
  fullBoard[4][2] = 1
  fullBoard[5][3] = 1

  console.log(fullBoard, `Board ${i+1}`)
}

/*
then add the 3 looped diagonals
*/