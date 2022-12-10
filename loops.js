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

for (let i = 0; i < 3; i++) {
  let fullBoard = createBoard()

  fullBoard[2-i][0] = 1
  fullBoard[3-i][1] = 1
  fullBoard[4-i][2] = 1
  fullBoard[5-i][3] = 1

  console.log(fullBoard, `Board ${i+1}`)
}

for (let i = 0; i < 3; i++) {
  let fullBoard = createBoard()

  fullBoard[2-i][1] = 1
  fullBoard[3-i][2] = 1
  fullBoard[4-i][3] = 1
  fullBoard[5-i][4] = 1

  console.log(fullBoard, `Board ${i+4}`)
}

for (let i = 0; i < 3; i++) {
  let fullBoard = createBoard()

  fullBoard[2-i][2] = 1
  fullBoard[3-i][3] = 1
  fullBoard[4-i][4] = 1
  fullBoard[5-i][5] = 1

  console.log(fullBoard, `Board ${i+7}`)
}

for (let i = 0; i < 3; i++) {
  let fullBoard = createBoard()

  fullBoard[2-i][3] = 1
  fullBoard[3-i][4] = 1
  fullBoard[4-i][5] = 1
  fullBoard[5-i][6] = 1

  console.log(fullBoard, `Board ${i+10}`)
}

/*
then add the 3 looped diagonals
*/