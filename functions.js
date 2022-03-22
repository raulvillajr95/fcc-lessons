function sumFibs(num) {
  if (num == 1) {
    return 1;
  }
  let fibs = [1,1];
  for (let i = 1; fibs[fibs.length-1] < num; i++) {
    if (fibs[fibs.length-1] < num) {
      fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
    }
  }
  
  let final = []
  for (let j = 0; j < fibs.length; j++) {
    if (fibs[j] <= num && fibs[j]%2 == 1) {
      final.push(fibs[j])
    }
  }

  let summed = final.reduce((a, b) => a + b);
  return summed;
}

console.log(sumFibs(75025))

/*
ideas 
-run through argi
-if number is not in argi, add it
-
*/