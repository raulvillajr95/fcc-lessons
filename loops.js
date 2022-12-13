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

function winCheck(board, currentPlayer) {
  return (diagonalCheck(board, currentPlayer) ||
          verticalCheck(board, currentPlayer) ||
          horizontalCheck(board, currentPlayer))
}

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