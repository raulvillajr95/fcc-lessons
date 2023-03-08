/**
 *
 *
 *
 *
 *
 *
 *
 */

//  from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    console.log(array[k], lowHalf[j], highHalf[j], 'array lowH highH');
    console.log(k, i, j, 'k i j');
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i += 1;
    } else {
      array[k] = highHalf[j];
      j += 1;
    }
    k += 1;
  }
  while (i < lowHalf.length) {
    console.log(i, 'i < lowHalf.length');
    array[k] = lowHalf[i];
    i += 1;
    k += 1;
  }
  while (j < highHalf.length) {
    console.log(j, 'j < highHalf.length');
    array[k] = highHalf[j];
    j += 1;
    k += 1;
  }
  // while (condition) {}
  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
};

// Takes in an array and recursively merge sorts it
// var mergeSort = function (array, p, r) {
//   if (p < r) {
//     var q = Math.floor((p + r) / 2);

//     console.log(q, 'q');
//     console.log(array, 'array');
//     console.log(array.slice(0, q), 'first half');
//     console.log(array.slice(q, array.length), 'second half');

//     mergeSort(array, p, q);
//     mergeSort(array, q + 1, r);
//     merge(array, p, q, r);
//   }
// };

var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0, Math.floor((0 + array.length - 1) / 2), array.length - 1);
console.log('Array after merging: ' + array);
