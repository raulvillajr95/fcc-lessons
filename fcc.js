function highest(arr) {
  let count = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    } else if (arr[i] > count) {
      count = arr[i]
    }
  }
  return count;
}
console.log(highest([null, -1000]))
console.log(-1000 > -Infinity)