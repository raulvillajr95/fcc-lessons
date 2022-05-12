// Computing the Sum of an Array of Integers

let arr1 = [1,2,3]

let len1 = arr1.length
let count = 0

// Recursion
function sum(arr, len) {
  if (len > 0) {
    len1 -= 1
    count += arr[len1]
    return sum(len1, len1)
  }
}

console.log(sum(arr1, len1))

// For loop
let summ = 0
for (let i = 0; i < arr1.length; i++) {
  summ += arr1[i];
}
console.log(summ)