/*
** The Gameboard represents the state of the board
** Each equare holds a Cell (defined later)
** and we expose a dropToken method to be able to add Cells to squares
*/

let dependencies = (function() {
  let playerOneName;
  let playerTwoName;

  return {
    playerOneName,
    playerTwoName
  }
})()

// loads turn, game-result, and board
function loadGameElements() {
  let container = document.querySelector('.container')

  let turnElem = document.createElement('h1');
  turnElem.setAttribute('class', 'turn');
  container.appendChild(turnElem)

  let gameResultElem = document.createElement('h2');
  gameResultElem.setAttribute('class', 'game-result');
  container.appendChild(gameResultElem)

  let boardDiv = document.createElement('div');
  boardDiv.setAttribute('class', 'board');
  container.appendChild(boardDiv)
}
// loadGameElements()

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  // MY
  let falseCount = 0;
  let playerOneName;
  let playerTwoName;

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
    // console.log(boardWithCellValues);

  };

  // MY
  const fullBoard = () => {
    return boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
  }

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { 
    getBoard,
    dropToken,
    printBoard,
    fullBoard,
    falseCount,
    playerOneName,
    playerTwoName
  };
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
    // console.log(`${getActivePlayer().name}'s turn.`);
  };

  // MY
  function winCheck(boardToCheck, currentPlayer) {
    let matched =(diagonalCheck(boardToCheck, currentPlayer) ||
                  verticalCheck(boardToCheck, currentPlayer) ||
                  horizontalCheck(boardToCheck, currentPlayer))
    if (matched == false) {
      board.falseCount += 1
      return false
    } else {
      gameResultElement('win')
      return true
    }
  }

  function gameResultElement(result) {
    let gameResultElem = document.querySelector('.game-result');
    if (result == 'win') {
      gameResultElem.textContent = `Player ${getActivePlayer().token} has won`
    } else if (result == 'tie'){
      gameResultElem.textContent = `TIE!`
    }
  }

  function tieCheck() {
      if (board.falseCount >= 42) {
        gameResultElement('tie')
        return true
      } else {
        return false
      }
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
        let matched = (board[2-i][j] == currentPlayer &&
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

  const playRound = (column) => {
    // Drop a token for the current player
    // console.log(
    //   `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    // );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */
    // MY
    console.log('Win?', winCheck(board.fullBoard(), getActivePlayer().token))
    console.log('Tie?', tieCheck())


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
    getActivePlayer,
    getBoard: board.getBoard,
    board
  };
}

function ScreenController() {
  let playerOneValue = dependencies.playerOneName
  let playerTwoValue = dependencies.playerTwoName

  let game;
  if (!playerOneValue || !playerTwoValue) {
    game = GameController();
  } else {
    game = GameController(dependencies.playerOneName, dependencies.playerTwoName);
  }

  const playerTurnDiv = document.querySelector('.turn');
  const boardDiv = document.querySelector('.board');

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`

    // Render board squares
    board.forEach(row => {
      row.forEach((cell, index) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our
        // `playRound` function
        cellButton.dataset.column = index
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      })
    })
  }

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    // Make sure I've clicked a column and not the gaps in
    // between
    if (!selectedColumn) return;

    game.playRound(selectedColumn);
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();
  
  // We don't need to return anything from this module 
  // becuase everything is encapsulated inside this screen
  // controller.
}
// ScreenController();

function loadStartPage() {
  let container = document.querySelector('.container');
  let startContainer = document.createElement('div');
  startContainer.setAttribute('class', 'start-container');

  let playerOneLabel = document.createElement('label');
  playerOneLabel.setAttribute('for', 'player-one');
  playerOneLabel.textContent = 'Player One Name'
  startContainer.appendChild(playerOneLabel);

  let playerOneElem = document.createElement('input');
  playerOneElem.setAttribute('type', 'text');
  playerOneElem.setAttribute('id', 'player-one');
  playerOneElem.setAttribute('name', 'player-one');
  startContainer.appendChild(playerOneElem);

  let playerTwoLabel = document.createElement('label');
  playerTwoLabel.setAttribute('for', 'player-two');
  playerTwoLabel.textContent = 'Player Two Name'
  startContainer.appendChild(playerTwoLabel);

  let playerTwoElem = document.createElement('input');
  playerTwoElem.setAttribute('type', 'text');
  playerTwoElem.setAttribute('id', 'player-two');
  playerTwoElem.setAttribute('name', 'player-two');
  startContainer.appendChild(playerTwoElem);

  let startBtn = document.createElement('button');
  startBtn.setAttribute('class', 'start-btn');
  startBtn.textContent = 'Start';
  startContainer.appendChild(startBtn);

  container.appendChild(startContainer)
}
loadStartPage()


function clearPage() {
  let container = document.querySelector('.container')
  for (let i = 0; i < container.children.length; i++) {
    container.children[0].remove()
  }
}

let grabNames = (() => {
  let playerOneInp = document.querySelector('#player-one')
  let playerTwoInp = document.querySelector('#player-two')
  dependencies.playerOneName = playerOneInp.value
  dependencies.playerTwoName = playerTwoInp.value
})

let startScreenStartBtn = (() => {
  let startBtn = document.querySelector('.start-btn')
  startBtn.addEventListener('click', () => {
    grabNames()
    clearPage();
    loadGameElements();
    ScreenController();
  })
})()

function loadStartPage() {
  let container = document.querySelector('.container');
  let winContainer = document.createElement('div');
  winContainer.setAttribute('class', 'winner-container');

  let playerOneLabel = document.createElement('label');
  playerOneLabel.setAttribute('for', 'player-one');
  playerOneLabel.textContent = 'Player One Name'
  startContainer.appendChild(playerOneLabel);

  let playerOneElem = document.createElement('input');
  playerOneElem.setAttribute('type', 'text');
  playerOneElem.setAttribute('id', 'player-one');
  playerOneElem.setAttribute('name', 'player-one');
  startContainer.appendChild(playerOneElem);

  let playerTwoLabel = document.createElement('label');
  playerTwoLabel.setAttribute('for', 'player-two');
  playerTwoLabel.textContent = 'Player Two Name'
  startContainer.appendChild(playerTwoLabel);

  let playerTwoElem = document.createElement('input');
  playerTwoElem.setAttribute('type', 'text');
  playerTwoElem.setAttribute('id', 'player-two');
  playerTwoElem.setAttribute('name', 'player-two');
  startContainer.appendChild(playerTwoElem);

  let startBtn = document.createElement('button');
  startBtn.setAttribute('class', 'start-btn');
  startBtn.textContent = 'Start';
  startContainer.appendChild(startBtn);

  container.appendChild(winContainer)
}

/*
function that creates winner page elements
function that clears, loads, winnner, assigns winner, and displays
*/