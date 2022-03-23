function smallestCommons(arr) {
  let ran = [];
  let sorted = arr.sort();
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    ran.push(i);
  }

  let final = []
  for (let i = 1; i < 100; i++) {
    if (i % ran[0] == 0 || i % ran[1] == 0 || i % ran[2] == 0) {
      final.push(i)
    }
  }

  return final
}

console.log(smallestCommons([3,5]))

/*
ideas 
-run infinetly
-if number is divisible by all of 'ran' digits, exit loop
-also set a variable equal to that first number
-needa find a way to run it through every number
*/