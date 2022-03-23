function smallestCommons(arr) {
  let ran = [];
  let sorted = arr.sort();
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    ran.push(i);
  }

  function findPrimes(num) {
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
    return finalL
  }

  return findPrimes(arr[1])
}

console.log(smallestCommons([3,5]))

/*
ideas 
-find prime decomp of each number
-multiply all of them
*/