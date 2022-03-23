function smallestCommons(arr) {
  let ran = [];
  let sorted = arr.sort();
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    ran.push(i);
  }

  let final = [ran[0]];
  for (let j = 0; j < ran.length; j++) {
    for (let k = 1; k <= ran[j]; k++) {
      console.log(ran[j],k)
      //if (k % final == 0) {}
    }
  }
  return final;
}

console.log(smallestCommons([1,5]))

/*
ideas 
-run infinetly
-if number is divisible by all of 'ran' digits, exit loop
-also set a variable equal to that first number
*/