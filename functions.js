function steamrollArray(arr) {
  let final = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == true) {
      while (Array.isArray(arr[i]) == true) {
        arr[i][0]
      }
    } else {
      final.push(arr[i])
      arr
    }
  }
  return final
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

/*
to-do:
-if boolean true get value to new array
-maybe use reduce??
-use a while loop?
set it up somehow so that after every iteration it goes deeper
until it's not a loop
*/