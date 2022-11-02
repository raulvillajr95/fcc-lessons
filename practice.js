function minimax(depth, nodeIndex, isMax, scores, h) {

  if (depth == h) {
    return scores[nodeIndex]
  }
  
  if (isMax) {
    return Math.max(minimax(depth+1, nodeIndex*2, false, scores, h),
      minimax(depth+1, nodeIndex*2 + 1, false, scores, h));
  } else {
    return Math.min(minimax(depth+1, nodeIndex*2, true, scores, h),
      minimax(depth+1, nodeIndex*2 + 1, true, scores, h));
  }
}

let board = [""]

let scores = [];

for (let i = 0; i < 524288; i++) {
  scores.push(i)
}

let n = scores.length;
let h = Math.log2(n);
let res = minimax(0,0,true,scores,h);
console.log("The optimal value is: " + res)
let index = scores.indexOf(res)
//board[index] = "O"

let ex = [];
//console.log(ex)

// 1 win, 0 draw, -1 lose

/*
to-do:
-create a 1 box tic tac toe cpu
  -still using min max, not just "if empty, fill in box"
  -obviously at 1 box, it's just 1 move, only cpu, not me then cpu
  -i can copy my current project onto a new practice one
  -set up a score for the box
    -goal: just place box
-create a 2 box tic tac toe cpu
  -still using min max, not just "if empty, fill in box"
  -at 2 boxes, it's 2 moves, me then cpu 
  -set up a score for the box
    -goal: place box on left
-create a 3 box tic tac toe cpu
  -still using min max, not just "if empty, fill in box"
  -at 3 boxes, it's 3 moves, me then cpu then me
  -set up a score for the boxes
    -goal: place box on left
-create a 4 box tic tac toe cpu
  -still using min max, not just "if empty, fill in box"
  -at 4 boxes, it's 4 moves, me then cpu then me then cpu
  -set up a score for the boxes
    -goal: place box on top 2
-and so on, just increase box number, 5, 6, 7, 8, 9

ideas:
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
*/