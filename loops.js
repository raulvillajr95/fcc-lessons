/**
 *
 *
 *
 *
 *
 *
 *  every 10 challenges, checkout 'Largest prime factor'
 *  challenges myself to do all them in recursively
 */

// if looping, use recursion
class SmallestIntegerFinder {
  findSmallestInt(arr, counter = arr.length, smallest = Infinity) {
    // console.log(arr, counter, 'stats');
    if (counter <= 0) {
      if (arr[counter] < smallest) {
        smallest = arr[counter];
      }
      return smallest;
    } else {
      if (arr[counter] < smallest) {
        smallest = arr[counter];
      }
      return this.findSmallestInt(arr, counter - 1, smallest);
    }
  }
}
let small = new SmallestIntegerFinder();
console.log(small.findSmallestInt([78, 56, 232, 12, 18]));

// function findSmallestInt(arr, counter = arr.length, smallest = Infinity) {
//   if (counter <= 0) {
//     if (arr[counter] < smallest) {
//       smallest = arr[counter];
//     }
//     return smallest;
//   } else {
//     if (arr[counter] < smallest) {
//       smallest = arr[counter];
//     }
//     return findSmallestInt(arr, counter - 1, smallest);
//   }
// }
// console.log(findSmallestInt([78, 56, 232, 12, 18]), 'end');
