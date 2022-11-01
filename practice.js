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

let scores = [4,8,9,3,2,-2,9,-1];
let n = scores.length;
let h = Math.log2(n);
let res = minimax(0,0,true,scores,h);
console.log("The optimal value is: " + res)
console.log(scores.indexOf(res))

/*
ideas:
-i wanna truly understand how minimax works
-the very bottom of the tree might be 'scores'
  -it might change every time an x is placed
  -when you find the optimal value,
  get that index and place an "O there"
    -i could use the index and place it on the board
    of Xs and Os
    -*essesntially, can the score array be be aligned
    with the board array
-i need a scoring system, it could be a range of points
  -ex: 10 for the best possible move, and -10 for
  the worst possible move
*/