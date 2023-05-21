/**
 *
 *
 *
 *
 *
 *
 */



function divisors(n, counter = 1, arr = [], arr2 = []) {
  if (counter >= Math.sqrt(n)) {
    if (n % counter === 0) {
      arr.push(counter);
    }
    return [...arr, ...arr2];
  } else {
    if (n % counter === 0) {
      arr.push(counter);
      arr2.unshift(n / counter);
    }
    return divisors(n, counter + 1, arr, arr2);
  }
}

function removeDuplicatesArr(inp, counter = 0, arr = []) {
  if (counter >= inp.length - 1) {
    if (!arr.includes(inp[counter])) arr.push(inp[counter]);
    return arr;
  } else {
    if (!arr.includes(inp[counter])) arr.push(inp[counter]);
    return removeDuplicatesArr(inp, counter + 1, arr);
  }
}

function classify (num) {
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let factors = divisors(num)
  let remDups = removeDuplicatesArr(factors)
  let sum = 0
  for (let i = 0; i < remDups.length - 1; i++) {
    sum += remDups[i]
  }
  return sum
}

console.log(classify(6))
