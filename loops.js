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

// function checkIfWin(currentPlayer, board) {
//   if (currentPlayer == 1) {
//     // function(board)
//   } else if (currentPlayer == 2) {

//   }
// }

// maybe delete, might be able to do in 1 function
// function checkBoard(params) {
  
// }

let count = 1
// Diagonal topL/bottomR
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    let fullBoard = createBoard()
    fullBoard[2-i][j] = 1
    fullBoard[3-i][j+1] = 1
    fullBoard[4-i][j+2] = 1
    fullBoard[5-i][j+3] = 1
    //console.log(fullBoard, `Board ${count}`)
    count += 1
  }
}

// Diagonal topR/bottomL
for (let i = 0; i < 3; i++) {
  for (let j = 6; j > 2; j--) {
    let fullBoard = createBoard()
    fullBoard[2-i][j] = 1
    fullBoard[3-i][j-1] = 1
    fullBoard[4-i][j-2] = 1
    fullBoard[5-i][j-3] = 1
    //console.log(fullBoard, `Board ${count}`)
    count += 1
  }
}

// Verticals
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 7; j++) {
    let fullBoard = createBoard()
    fullBoard[i][j] = 1
    fullBoard[i+1][j] = 1
    fullBoard[i+2][j] = 1
    fullBoard[i+3][j] = 1
    //console.log(fullBoard, `Board ${count}`)
    count += 1
  }
}

// Horizontals
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    let fullBoard = createBoard()
    fullBoard[j][i] = 1
    fullBoard[j][1+i] = 1
    fullBoard[j][2+i] = 1
    fullBoard[j][3+i] = 1
    //console.log(fullBoard, `Board ${count}`)
    count += 1
  }
}

let fullBoard = createBoard()
fullBoard[5][0] = 1
fullBoard[5][1] = 2
fullBoard[5][2] = 1
fullBoard[5][3] = 2
fullBoard[5][4] = 2
fullBoard[5][5] = 2
fullBoard[5][6] = 1
fullBoard[4][0] = 1
fullBoard[4][1] = 1
fullBoard[4][2] = 2
fullBoard[4][3] = 1
fullBoard[4][4] = 2
fullBoard[4][5] = 1
fullBoard[3][0] = 1
fullBoard[3][3] = 2
fullBoard[3][4] = 1
fullBoard[3][5] = 1
fullBoard[2][0] = 2
fullBoard[2][4] = 2
fullBoard[2][5] = 2
// console.log(fullBoard, 'fullboard')

function diagonalCheck(board, currentPlayer) {
  // Diagonal topL/bottomR
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let matched = (board[2-i][j] == currentPlayer &&
      board[3-i][j+1] == currentPlayer &&
      board[4-i][j+2] == currentPlayer &&
      board[5-i][j+3] == currentPlayer)
      if (matched) {
        return true;
      } else {
        continue;
      }
    }
  }
  // Diagonal topR/bottomL
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j > 2; j--) {
      let matched = (fullBoard[2-i][j] == currentPlayer &&
      board[3-i][j-1] == currentPlayer &&
      board[4-i][j-2] == currentPlayer &&
      board[5-i][j-3] == currentPlayer)
      if (matched) {
        return true;
      } else {
        continue;
      }
    }
  }
  return false;
}

function verticalCheck(board, currentPlayer) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      let matched = (board[i][j] == currentPlayer &&
      board[i+1][j] == currentPlayer &&
      board[i+2][j] == currentPlayer &&
      board[i+3][j] == currentPlayer)
      if (matched) {
        return true;
      } else {
        continue;
      }
    }
  }
  return false;
}

function horizontalCheck(board, currentPlayer) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      let matched = (board[j][i] == currentPlayer &&
      board[j][1+i] == currentPlayer &&
      board[j][2+i] == currentPlayer &&
      board[j][3+i] == currentPlayer)
      if (matched) {
        return true;
      } else {
        continue;
      }
    }
  }
  return false;
}

/*

*/