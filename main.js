/**
 *
 *
 *
 *
 *
 *
 *
 */

// This function partitions given array and returns
//  the index of the pivot.
var partition = function (array, p, r) {
  // This code has been purposefully obfuscated,
  // as you will implement it yourself in next challenge
  var e = array,
    t = p,
    n = r;
  var r = function (e, t, n) {
    var r = e[t];
    e[t] = e[n];
    e[n] = r;
  };
  var i = t;
  for (var s = t; s < n; s++) {
    if (e[s] <= e[n]) {
      r(e, s, i);
      i++;
    }
  }
  r(e, n, i);
  return i;
};

var quickSort = function (array, p, r) {
  console.log(array, p, r, 'array p r');
  console.log(array.slice(p, r + 1).length, 'need 1');
  console.log(array.substr(p).length + 1, 'need 2');
  if (1 < array.slice(p, r + 1).length) {
    var q = partition(array, p, r);
    console.log(q);

    quickSort(array, p, q - 1);
    quickSort(array, q + 1, r);
  }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
// partition(array, 0, array.length - 1);
console.log('Array after sorting: ' + array);
// console.log(partition(array, 0, array.length - 1));
