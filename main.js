/*
** The Gameboard represents the state of the board
** Each equare holds a Cell (defined later)
** and we expose a dropToken method to be able to add Cells to squares
*/

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  // Create a 2d array that will represent the state of the game board
  // For this 2d array, row 0 will represent the top row and
  // column 0 will represent the left-most column.
  // This nested-loop technique is a simple and common way to create a 2d array.
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => board;

  // In order to drop a token, we need to find what the lowest point of the
  // selected column is, *then* change that cell's value to the player number
  const dropToken = (column, player) => {
    // Our board's outermost array represents the row,
    // so we need to loop through the rows, starting at row 0,
    // find all the rows that don't have a token, then take the
    // last one, which will represent the bottom-most empty cell
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    // If no cells make it through the filter, 
    // the move is invalid. Stop execution.
    if (!availableCells.length) return;

    // Otherwise, I have a valid cell, the last one in the filtered array
    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };

  // This method will be used to print our board to the console.
  // It is helpful to see what the board looks like after each turn as we play,
  // but we won't need it after we build our UI
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  // MY
  const fullBoard = () => {
    return boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
  }

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, dropToken, printBoard, fullBoard };
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/
function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  // MY
  const winningPositions = () => {
    // 1 Diagonal winning position
    // number of boards
    for (let g = 0; g < 1; g++) {
      let fullBoard = []
      // number of rows
      for (let h = 0; h < 6; h++) {
        let row = []
        // number of columns
        for (let i = 0; i < 7; i++) {
          if (i == 0 && h == 2) {
            row[i] = 1
          } else {
            row[i] = 0
          }
        }
        fullBoard[h] = row;
        row = 0
      }
      console.log(fullBoard, 'Bingo!')
    }

    // 21 Vertical winning positions
    // for (let f = 0; f < 7; f++) {
    //   // number of boards
    //   for (let g = 0; g < 3; g++) {
    //     let fullBoard = []
    //     // number of rows
    //     for (let h = 0; h < 6; h++) {
    //       let row = []
    //       // number of columns
    //       for (let i = 0; i < 7; i++) {
    //         if (h < g+4 && h >= g && i === f) {
    //           row[i] = 1
    //         } else {
    //           row[i] = 0
    //         }
    //       }
    //       fullBoard[h] = row;
    //       row = 0
    //     }
    //     console.log(fullBoard, 'Bingo!')
    //   }
    // }

    // 24 Horizontal winning positions 
    // for (let f = 0; f < 6; f++) {
    //   // number of boards
    //   for (let g = 0; g < 4; g++) {
    //     let fullBoard = []
    //     // number of rows
    //     for (let h = 0; h < 6; h++) {
    //       let row = []
    //       // number of columns
    //       for (let i = 0; i < 7; i++) {
    //         if (i < g+4 && i >= g && h == f) {
    //           row[i] = 1
    //         } else {
    //           row[i] = 0
    //         }    
    //       }
    //       fullBoard[h] = row;
    //       row = 0
    //     }
    //     console.log(fullBoard, 'Bingo!')
    //   }
    // }
  }
  // MY
  const checkForWinner = () => {
    console.log(board.fullBoard()[5], "Bingo!")
  }

  const playRound = (column) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */
    // MY
    //checkForWinner()
    winningPositions()

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();





/*
create winning condition for console
  check for all horizontal wins
create tie condition for console
*/

// Just saving
function continousImgAppearance() {
  let objectImgElem = document.getElementById('object-image');
  let imgSwitch = "off";
  let loadDate;

  let interval = setInterval(function() {
    let time = randomNumbers(3000, 6001)
    let date = Date.now()
    if (imgSwitch == "off") {
      imgSwitch = "on"
      // loadRandomImage()
      loadDate = Date.now()
      // console.log(time)
    } else if (imgSwitch == "on") {
      imgSwitch = "off"
      // objectImgElem.setAttribute('src', "")
      // objectImgElem.style.backgroundColor = "";
      // objectImgElem.style.outline = "";
      // console.log(time)
    }
    console.log(loadDate);
  }, 1)
}
continousImgAppearance()