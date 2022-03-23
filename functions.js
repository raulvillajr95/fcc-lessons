function sumPrimes(num) {
  let finalL = [];

  let primeTest = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        primeTest.push([i, j])
      }
    }
    if (primeTest.length == 2) {
      finalL.push(i)
    }
    primeTest=[]
  }

  let summed = finalL.reduce((a, b) => a + b)
  return summed;
}

console.log(sumPrimes(10))

/*
ideas 
-run through argi
-if number is not in argi, add it
-
*/