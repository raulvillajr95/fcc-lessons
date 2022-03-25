function smallestCommons(arr) {
  let ran = []
  let sorted = arr.sort((a,b) => a - b)
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    ran.push(i);
  }

  function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  let factors = []
  for (let i = 0; i < ran.length; i++) {
    if (ran[i] == 1) {
      factors.push([1])
    } else {
      factors.push(primeFactors(ran[i]))
    }
  }

  return factors;
}

console.log(smallestCommons([1, 13]))

/*
To-Do:
-study the prime factorization method
-apply it to smallestCommons function

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

New Approach:
-get a bunch of multiples of each num
maybe send arrays in arrays
infinite loop? 
once per round, for index[0] send multiple
for index[1] send multiple
etc.
at the end it checks
-num should be in array certain number of times
Ex: in [1, 5] theres 5 numbers cause [1,2,3,4,5]
-if the num is in the array 5 times:
break array and return that number
-if not do a second round of multiples
-if not third, 4th, 5th etc
*/