/**
 *
 *
 *
 *
 *
 *
 *
 */

// Swaps two items in an array, changing the original array
var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = function (array, p, r) {
  var q = p;
  var j = p;
  console.log(p, r, 'p r');
  console.log(p, array.length + p);
  for (var j = p; j < array.length + p; j++) {
    if (array[j - p] <= array[r - p]) {
      q += 1;
      swap(array, j - p, q - p - 1);
    }
  }
  return q - 1;
};

// model: before starting, 0th(1st loop), 1st(2nd loop)

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 8, 18);
// var q = partition(array, 4, 9);
console.log('Array after partition: ' + array);
console.log(q);

// var array1 = [9, 7, 5, 11, 12, 2, 14, 3];
// quickSort(array1, 0, array1.length - 1);
// console.log('Array after sorting: ' + array1);

// var array2 = [9];
// quickSort(array2, 0, array2.length - 1);
// console.log('Array after sorting: ' + array2);

// var array3 = [9, 7];
// quickSort(array3, 0, array3.length - 1);
// console.log('Array after sorting: ' + array3);

// var array4 = [9, 7, 5];
// quickSort(array4, 0, array4.length - 1);
// console.log('Array after sorting: ' + array4);

// var array5 = [9, 7, 5, 11];
// quickSort(array5, 0, array5.length - 1);
// console.log('Array after sorting: ' + array5);

// var array6 = [9, 7, 5, 11, 0, 2, 14, 3, 0, 6];
// quickSort(array6, 0, array6.length - 1);
// console.log('Array after sorting: ' + array6);

// var array7 = [9, -7, 5, 11, 12, -2, 14, -3, 10, 6];
// quickSort(array7, 0, array7.length - 1);
// console.log('Array after sorting: ' + array7);
