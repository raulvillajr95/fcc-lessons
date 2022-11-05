let gameBoard = (() => {
  let board = ["","","","","","","","",""];

  let markerChoiceState = "X";
  let turnsCount = 0;
  let tableEnabled = false;
  let mode = "";
  let startBtnToggle = true;
  let scores = [3, 2, 3, 2, 4, 2, 3, 2, 3];
  let indexOfMissing = 0;
  return {
    board,
    markerChoiceState,
    turnsCount,
    tableEnabled,
    mode,
    startBtnToggle,
    scores,
    indexOfMissing
  }
})();

let Player = () => {
  return {}
}

// Winning/Losing logic
let correct = (() => {

  let result = (board,marker) => 
    board[0] === `${marker}` && board[1] === `${marker}` && board[2] === `${marker}` ||
    board[3] === `${marker}` && board[4] === `${marker}` && board[5] === `${marker}` ||
    board[6] === `${marker}` && board[7] === `${marker}` && board[8] === `${marker}` ||
    board[0] === `${marker}` && board[3] === `${marker}` && board[6] === `${marker}` ||
    board[1] === `${marker}` && board[4] === `${marker}` && board[7] === `${marker}` ||
    board[2] === `${marker}` && board[5] === `${marker}` && board[8] === `${marker}` ||
    board[0] === `${marker}` && board[4] === `${marker}` && board[8] === `${marker}` ||
    board[2] === `${marker}` && board[4] === `${marker}` && board[6] === `${marker}`;

  return {result}
})();

// If clicked add an x and displays board
(function() {
  let container = document.querySelector(".container");
  let warningElem = document.querySelector(".warning")
  let player1 = document.getElementById("player1")
  let player2 = document.getElementById("player2")

  for (let i = 0; i < container.children.length; i++) {
    container.children[i].addEventListener('click', (e) => {

      if (container.children[i].textContent === "" && gameBoard.tableEnabled && gameBoard.mode === "player") {
        container.children[i].textContent = gameBoard.markerChoiceState
        gameBoard.board[i] = gameBoard.markerChoiceState

        gameBoard.turnsCount++;

        // working on single character match
        if (correct.result(gameBoard.board, gameBoard.markerChoiceState) && container.children[i].textContent != "") {
          gameBoard.tableEnabled = false

          if (gameBoard.markerChoiceState === "X") {
            warningElem.textContent = `${player1.value} wins!`
          } else if (gameBoard.markerChoiceState === "O") {
            warningElem.textContent = `${player2.value} wins!`
          }
        } else if (gameBoard.turnsCount === 9) {

          warningElem.textContent = "TIE"
        }

        if (gameBoard.markerChoiceState === "X") {
          gameBoard.markerChoiceState = "O"
        } else if (gameBoard.markerChoiceState === "O") {
          gameBoard.markerChoiceState = "X"
        }
      }
    });
  }
})();

// Change X and O state with buttons
(function() {
  let xBtn = document.querySelector(".x-btn")
  let oBtn = document.querySelector(".o-btn")

  xBtn.addEventListener('click', () => {
    gameBoard.markerChoiceState = "X";
  })

  oBtn.addEventListener('click', () => {
    gameBoard.markerChoiceState = "O";
  })
})();

// Start menu
(function() {
  let player1 = document.getElementById("player1")
  let player1Display = document.getElementById("player1-display")
  let player2 = document.getElementById("player2")
  let player2Display = document.getElementById("player2-display")
  let startBtn = document.querySelector(".start-btn")
  let container = document.querySelector(".container");
  let warningElem = document.querySelector(".warning")
  let cpuBtn = document.querySelector(".cpu-btn")

  // delete
  let startBtnToggle = true

  startBtn.addEventListener('click', (e) => {
    if (player1.value === "" || player2.value === "") {
      warningElem.textContent = "Please enter player names/name"
    } else {
      if (gameBoard.startBtnToggle) {
        gameBoard.tableEnabled = true;
        gameBoard.mode = "player"

        warningElem.textContent = ""
  
        player1.style.display = "none";
        player2.style.display = "none";
        cpuBtn.style.display = "none";
  
        player1Display.textContent = player1.value
        player2Display.textContent = player2.value
  
        startBtn.textContent = "Restart"
        gameBoard.startBtnToggle = false;
      } else if (!gameBoard.startBtnToggle) {
        gameBoard.tableEnabled = false;
        gameBoard.board = ["","","","","","","","",""];
        gameBoard.markerChoiceState = "X";
        gameBoard.turnsCount = 0;
        gameBoard.mode = "";

        warningElem.textContent = "Enter Player names or play CPU"
  
        // Reset Xs and Os on table
        for (let i = 0; i < container.children.length; i++) {
          container.children[i].textContent = ""; 
        }
  
        player1.style.display = "";
        player2.style.display = "";
  
        player1Display.textContent = ""
        player2Display.textContent = ""
  
        player1.value = ""
        player2.value = ""
        cpuBtn.style.display = "";
  
        startBtn.textContent = "Start"
        gameBoard.startBtnToggle = true;
      }
    }
  })

})();

// CPU Start Menu
(function () {
  let cpuBtn = document.querySelector(".cpu-btn")
  let player1 = document.getElementById("player1")
  let player1Display = document.getElementById("player1-display")
  let player2 = document.getElementById("player2")
  let player2Display = document.getElementById("player2-display")
  let startBtn = document.querySelector(".start-btn")
  let container = document.querySelector(".container");
  let warningElem = document.querySelector(".warning")

  cpuBtn.addEventListener('click', (e) => {
    if (player1.value === "") {
      warningElem.textContent = "Please enter player 1 name"
    } else {
      if (gameBoard.startBtnToggle) {
        gameBoard.tableEnabled = true;
        gameBoard.mode = "cpu"

        cpuMatch.run()

        warningElem.textContent = ""
  
        player1.style.display = "none";
        player2.style.display = "none";
        cpuBtn.style.display = "none";

  
        player1Display.textContent = player1.value

        player2.value = "CPU"
        player2Display.textContent = player2.value
  
        startBtn.textContent = "Restart"
        gameBoard.startBtnToggle = false;
      } else if (!gameBoard.startBtnToggle) {
        gameBoard.tableEnabled = false;
        gameBoard.board = ["","","","","","","","",""];
        gameBoard.markerChoiceState = "X";
        gameBoard.turnsCount = 0;
        gameBoard.mode = "";

        warningElem.textContent = "Enter player names or play CPU"
  
        // Reset Xs and Os on table
        for (let i = 0; i < container.children.length; i++) {
          container.children[i].textContent = ""; 
        }
  
        player1.style.display = "";
        player2.style.display = "";
        cpuBtn.style.display = "";
  
        player1Display.textContent = ""
        player2Display.textContent = ""
  
        player1.value = ""
        player2.value = ""
  
        startBtn.textContent = "Start"
        gameBoard.startBtnToggle = true;
      }
    }
  })
})();

let closeStates = (() => {
  let rowsColsDia = [{index0: gameBoard.board[0],index1: gameBoard.board[1],index2: gameBoard.board[2]},
  {index3: gameBoard.board[3],index4: gameBoard.board[4],index5: gameBoard.board[5]},
  {index6: gameBoard.board[6],index7: gameBoard.board[7],index8: gameBoard.board[8]},
  {index0: gameBoard.board[0],index3: gameBoard.board[3],index6: gameBoard.board[6]},
  {index1: gameBoard.board[1],index4: gameBoard.board[4],index7: gameBoard.board[7]},
  {index2: gameBoard.board[2],index5: gameBoard.board[5],index8: gameBoard.board[8]},
  {index0: gameBoard.board[0],index4: gameBoard.board[4],index8: gameBoard.board[8]},
  {index2: gameBoard.board[2],index4: gameBoard.board[4],index6: gameBoard.board[6]}]

  // make boolean function for finding if it's in losing/winning state
  // find empty spot index, change the scores on same index
  // may be there's a way to track it by row and col, then i can get index
  let closeLetter = "";
  let findState = () => {
    let hasTwoSameMarkers = false;

    for (let i = 0; i < rowsColsDia.length; i++) {
      if(Object.values(rowsColsDia[i]).join('') === "XX" || Object.values(rowsColsDia[i]).join('') === "OO") {
        hasTwoSameMarkers = true;

        //console.log(rowsColsDia[i])
        for (let j = 0; j < 3; j++) {
          if (rowsColsDia[i][Object.keys(rowsColsDia[i])[j]] == "") {
            gameBoard.indexOfMissing = Number(Object.keys(rowsColsDia[i])[j].slice(-1));
            if (Object.values(rowsColsDia[i])[0] == "X" || Object.values(rowsColsDia[i])[0] == "X") {
              closeLetter = "X"
            } else if (Object.values(rowsColsDia[i])[0] == "O" || Object.values(rowsColsDia[i])[0] == "O") {
              closeLetter = "O"
            }
            break;

            ////
          }
        }
      }
    }

    return hasTwoSameMarkers
  }


  return {
    findState,
    closeLetter
  }
});
closeStates().findState()

// CPU Match logic
let cpuMatch = (() => {
  let run = () => {
    let container = document.querySelector(".container");
    let warningElem = document.querySelector(".warning")

    if (gameBoard.mode = "cpu") {
      for (let i = 0; i < container.children.length; i++) {

        container.children[i].addEventListener('click', (e) => {
    
          // My X's logic
          if (container.children[i].textContent === "" && gameBoard.tableEnabled && gameBoard.mode === "cpu") {
            container.children[i].textContent = gameBoard.markerChoiceState
            gameBoard.board[i] = gameBoard.markerChoiceState
            gameBoard.scores[i] = null

            if (closeStates().findState()) {
              gameBoard.scores[gameBoard.indexOfMissing] += 10
            }
    
            gameBoard.turnsCount++;
            gameBoard.markerChoiceState = "O";
    
            // checking results
            if (correct.result(gameBoard.board, gameBoard.markerChoiceState) && container.children[i].textContent != "") {
              warningElem.textContent = "X wins";
              gameBoard.tableEnabled = false
            } else if (gameBoard.turnsCount === 9) {
              warningElem.textContent = "TIE";
              gameBoard.tableEnabled = false
            }
          }

          /////// CPU O's logic
          function highest(arr) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] > count) {
                count = arr[i]
              }
            }
            return count;
          }

          if (gameBoard.tableEnabled && gameBoard.mode === "cpu") {
  
            let high = highest(gameBoard.scores)
            let index = gameBoard.scores.indexOf(high);

            // needa catch it right at the diagonal moment
            // remember the specialPatternBoard reset, if used

            if (container.children[index].textContent == "" && gameBoard.markerChoiceState == "O") {
              if (gameBoard.turnsCount == 3 &&
                ((gameBoard.board[0] == 'X' && gameBoard.board[8]) ||
                (gameBoard.board[2] == 'X' && gameBoard.board[6]))) {
                console.log(gameBoard.board[0], gameBoard.board[8])
                container.children[1].textContent = "O"
                gameBoard.board[1] = "O"
                gameBoard.scores[1] = null
                
              } else {
                container.children[index].textContent = "O"
                gameBoard.board[index] = "O"
                gameBoard.scores[index] = null
                
              }

              if (closeStates().findState()) {
                gameBoard.scores[gameBoard.indexOfMissing] += 10
              }

              gameBoard.turnsCount++;
              gameBoard.markerChoiceState = "X";

              // checking results
              if (correct.result(gameBoard.board, "O")) {
                warningElem.textContent = "O wins";
                console.log("O wins")
                gameBoard.tableEnabled = false
              } else if (gameBoard.turnsCount === 9) {
                warningElem.textContent = "TIE";
                console.log("TIE")
                gameBoard.tableEnabled = false
              }

            } else if (container.children.textContent !== "") {
              if (gameBoard.turnsCount == 9) {
                //break;
              }
            }
          }
        });
      }
    }
  }
  return {
    run
  }
})();

// 1 win, 0 draw, -1 lose

/*
COMP3200 Notes
-at every step/depth, move a piece
-record the pieces moved on an imaginative board,
possibly not create every hella boards, idk yet
-when you reach terminal node, check if state of
board results in win
  -if it results in a winning state, go back to
  first move and make that move
  -else, if there's only draw state or losing,
  then go for draw state
  -else, if ther's only losing state, then you
  have no choice, so just make a move
-if not a terminal node, check take min, switch
between min/max until terminal node is reached
-or(for the terminal 'if') you can also check if
you're at your max depth(if you have a depth limit)

-for evaluation(this is custom dependant on the
programmer), in the current board state, how many
possible wins do I have throughout all of board?
me vs cpu, 
-ex: me 3, cpu 4
-also count partials, i could have one where i need
1 more piece to win, score that one highest
2 more pieces to win, score that one high
3 more pieces to win, score that one meh
-this can all be contained within a function
-this is pretty much tic tac toe winning strategies
-i might need to get good at tic tac toe
-possible score:
[3, 2, 3,
2, 4, 2,
3, 2, 3] and then 1000 or -1000 when move results in
win or loss, anytime there's 2 in a row
(amount of possible wins per placement)
-I need imaginary boards while checking states
-I need i need board that are definative,
a winning board
a draw board, maybe just 'if' statement(there's a lot of draws)
a losing board, pretty much a winning board but with opposite
*/

/* Reading the Board:
-2 dimensional array
[[Piece(), 0, Piece()],
[0, Piece(), 0],
[0, 0, Piece()]]
0's are empty spaces
-after reading board make count pieces of each X and O
*/
/* Get board after each ai move:
-were setting the new board after the ai moves
*/

/*
to-do:
-refactor current tic tac toe with random cpu
add states, classes, 'this', factory functions, IIFEs, etc
to the best of my ability
then get back to minmax
-create a 2 depth, 3 then 2 options
-create a 3 depth, 4 then 3 then 2 options
-create a 4 depth, 5 then 4 then 3 then 2 options
-etc

-etc. up to 9 depth, 9 options
-create a 4 box tic tac toe cpu
  -still using min max, not just "if empty, fill in box"
  -at 4 boxes, it's 4 moves, me then cpu then me then cpu
  -set up a score for the boxes
    -goal: place box on left 2
-then try 4 but 2 arrays of 2
["",""]
["",""]
-and so on, just increase box number, 5, 6, 7, 8, 9

ideas:
-keep things organized like using iifes, factory functions, etc
-for 4 boxes,
  i could slice array off that was picked
    save the index number
  place everything back together
-i could do 3 arrays of 3 instead of 1 array of 9
and work that out some how
["","",""]
["","",""]
["","",""]
or [["","",""],["","",""],["","",""]]
using variable[row][col]
-give it a set of correct array, like the one I already have
  -if the choice leads to that then make the move
  -using scores like -1= lose, 0 = tie, 1 = win
-might needa change the base# some how for the grid(Math.log2())
-i wanna truly understand how minimax works
-the very bottom of the tree might be 'scores'
  -it might change every time an x is placed
  -when you find the optimal value,
  get that index and place an "O there"
    -i could use the index and place it on the board
    of Xs and Os
    -*essesntially, can the score array be be aligned
    with the board array
  -also update scores
    -like update array or reducing length of array?
      -whats gonna happen with the indexes if there's less
      than 9??
        -I can probably just block it off, instead of a
        number, put 'null' or 'undefined' or '-Infinity', etc.
-i need a scoring system, it could be a range of points
  -ex: 10 for the best possible move, and -10 for
  the worst possible move
  -i could add 5 pts to every 1 block from X 
  
If all else fails:
-create my own way of doing it,
as opposed to just copying a tic tac toe example
-using everything in reach,
  if else
  while loop
  for in
  switch case
  etc.
-if 2 Xs in a row, put O at the end,
but if spot filled place anywhere else
-if 2 Xs on each end, put O in the middle
but if spot filled place anywhere else
-if 2 Xs on each end diagonally, put O in the middle
but if spot filled place anywhere else

Study:
-study all minimax articles/videos
-if nothing clicks, do the MIT course
-if nothing clicks, do it my own way. i'll no longer be
tied to minimax
*/


let a = 0;
let b = 0;

function maxValue(state, a, b, depth) {
  if (depth == 0) {return state}
  for (let s in (state + 1)) {
   a = Math.max(a, minValue(s,a,b,depth-1)) 
   if (a >= b) {return a}
  }
  return a
}

function minValue(state, a, b, depth) {
  if (depth == 0) {return state}
  for (let s in (state + 1)) {
   a = Math.min(b, maxValue(s,a,b,depth-1)) 
   if (a <= b) {return b}
  }
  return b
}