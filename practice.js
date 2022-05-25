function removeFromArray(arr, rem) {
  let  finalArr = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      console.log(`${arr[i]}, ${arguments[j]}`)
      if (arr[i] == arguments[j]) {
        
      } else {
        finalArr.push(arr[i])
      }
    }
  }
  
  return finalArr
}

console.log(removeFromArray([1,2,3,4], 3, 4))