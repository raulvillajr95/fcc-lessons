function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(arr.indexOf(arr[i]))
    }
  }
  return []
}

// let arr = [0, 1, 0, 1]
// console.log(arr.filter(function(n) {
//   return n === 1
// }))

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))

/*
To-Do:
-multiply everything in superFinal

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

Second Approach:
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

Third Approach:
-Find all the prime factors of each given number.
already done
-List all the prime numbers found, as many times as they occur most often for any one given number.
might have to loop through factors(from 2 through biggest number, in [1, 5] it'd be from 2 to 5)
which ever array has most occurances of number, add that many times of numbers to final array
loop that 
-Multiply the list of prime factors together to find the LCM.
just multiply final array
maybe the reduce()
*/