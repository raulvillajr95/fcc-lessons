function removeFromArray(arr, rem) {
  let  finalArr = []

  let arr 

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 1; j < arguments.length; j++) {
  //     console.log(`${arr[i]}, ${arguments[j]}`)
  //     if (arr[i] !== arguments[j]) {
  //       continue
  //     } else {
  //       finalArr.push(arr[i])
  //     }
  //   }
  // }

  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arguments[i]}, ${arr[j]}`)

    }
  }
  
  // return finalArr
}

// console.log(removeFromArray([1,2,3,4], 3, 4))

removeFromArray([1,2,3,4], 3, 4)