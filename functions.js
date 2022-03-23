function smallestCommons(arr) {
  let ran = [];
  let sorted = arr.sort();
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    ran.push(i);
  }

  let final = [];
  for (let j = arr[0]; j < 100; j += arr[0]) {
    for (let k = 0; k < ran.length; k++) {
      if (j % arr[k] == 0) {
        final.push(j)
      }
      /*
      if (j % arr[1] == 0 && j % arr[2] == 0) {
        return j;
      }
      */
    }
  }
  return final
}

console.log(smallestCommons([3,4,5]))

/*
ideas 
-run infinetly
-if number is divisible by all of 'ran' digits, exit loop
-also set a variable equal to that first number
-needa find a way to run it through every number
*/