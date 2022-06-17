function isEmpty(obj) {
  let lst = []
  for (const key in obj) {
    if (key) {
      lst.push(key)
    }
  }
  return lst.length == 0
}

let salaries = {
}

let sum = 0;
if (isEmpty(salaries)) {
  console.log(sum)
} else {
  for (const key in salaries) {
    sum += salaries[key]
  }
  console.log(sum)
}