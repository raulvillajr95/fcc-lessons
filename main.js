/**
 *
 *
 *
 *
 *
 *
 *
 */

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowerNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowerNumberIndex]) {
        lowerNumberIndex = j;
      }
    }
    if (lowerNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowerNumberIndex];
      array[lowerNumberIndex] = temp;
    }
  }
  return array;
}
console.log(
  selectionSort([
    3, 6, 1, 3, 6, 1, 3, 6, 1, 3, 6, 1, 6, 1, 3, 6, 1, 3, 6, 1, 3, 6, 1, 6, 1,
    3, 6, 1, 3, 6, 1, 3, 6, 1, 6, 1, 3, 6, 1, 3, 6, 1, 3, 6, 1,
  ])
);
