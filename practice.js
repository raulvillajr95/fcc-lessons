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

let scores = [1, 0]

let n = scores.length;
let h = Math.log2(n);
let res = minimax(0,0,true,scores,h);
console.log("The optimal value is: " + res)

// 1 win, 0 draw, -1 lose

/*
to-do:
-create a 1 depth, a or b or c
-create a 2 depth, a or b or c
-create a 1 depth, a or b or c or d
-create a 2 depth, a or b or c or d
-create a 3 depth, a or b or c or d
-create a 1 depth, a or b or c or d or e
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
-for 4 boxes,
  i could slice array off that was picked
    save the index number
  place everything back together
-i could do 3 arrays of 3 instead of 1 array of 9
and work that out some how
["","",""]
["","",""]
["","",""]
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