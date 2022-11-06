// function that makes one move ahead
let currentState = "O";

let board = ["X", "", "", "", "O", "", "", "", ""]

function oneMove(currentBoard, currentMarker) {
  let fullPositions = []

  let tempboard;

  for (let i = 0; i < currentBoard.length; i++) {
    tempboard = [...currentBoard]

    if (currentBoard[i] == "") {
      if (currentMarker == "X") {
        tempboard[i] = "O"
      } else {
        tempboard[i] = "X"
      }

      fullPositions.push(tempboard)
    }

  }

  return fullPositions
}