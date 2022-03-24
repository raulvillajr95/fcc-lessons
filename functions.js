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

  let listFactors = []
  for (let i = 0; i < ran.length; i++) {
    let factors = []
    if (ran[i] == 1) {
      factors.push(1)
    } else if (findPrimes(ran[i])[findPrimes(ran[i]).length - 1] == ran[i]) {
      factors.push(ran[i])
    } else {
      for(let j = 1; j <= ran[i]; j++) {
        if (j * j == ran[i]) {
          factors.push(j,j)
        } else if (ran[i] % j == 0) {
            factors.push(j);
        }
      }
    }
    listFactors.push(factors)
    factors = []
  }

  return listFactors
}

console.log(smallestCommons([3,5]))

/*
ideas 
-from individual groups 'listFactors'
-if length > 1(not a prime number)
-find the 2 prime factors
i could run through number 2 at a time
if they are both prime and they multiply to THE number
add them to final list
-multiply list
As for factoring factors
-when looping if there are no prime factors
-choose 2 numbers that multiply to THE number
-factor the one that is not prime
-keep factoring until only primes
*/