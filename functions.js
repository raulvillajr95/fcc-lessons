function steamrollArray(arr) {
  let final = []
  let suckOne = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && arr[i].length == 0) {
      suckOne.push(arr[i])
    } else {
      final.push(arr[i].toString())
    }
  }

  let finalFinal = []
  for (let i = 0; i < final.length; i++) {
    if (final[i].includes(',')) {
      let commas = final[i].split(',')
      for (let j = 0; j < commas.length; j++) {
        if (isNaN(Number(commas[j]))) {
          finalFinal.push(commas[j])
        } else {
          finalFinal.push(Number(commas[j]))
        }
      }
    } else {
      console.log(final[i])
      if (final[i] == '[object Object]') {
        finalFinal.push({})
      } else if (isNaN(Number(final[i]))) {
        finalFinal.push(final[i])
      } else {
        finalFinal.push(Number(final[i]))
      }
    }
  }

  return finalFinal
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))

/*
to-do:
-make exceptions for objects, they pass

ideas:
-if boolean true get value to new array
-maybe use reduce??
-use a while loop?
set it up somehow so that after every iteration it goes deeper
until it's not a loop
*/