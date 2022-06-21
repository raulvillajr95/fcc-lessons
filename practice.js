function fibonacci(a) {
  let fibList = [1, 1]

  if (a < 0) {
    return "OOPS"
  }

  for (let i = 0; i <= parseInt(a); i++) {
    let last = fibList[fibList.length-1]
    let secondLast = fibList[fibList.length-2]
    fibList.push(last + secondLast)
  }

  return fibList[a-1]
}

console.log(fibonacci(6))