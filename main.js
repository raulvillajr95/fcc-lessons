/**
 *
 *
 *
 *
 *
 *
 *
 */
var insert = function (array, rightIndex, value) {
  // first hard coded all the way through
  // then for loop(no if statements)
  // array[6] = array[5];
  // console.log(array, 'array');
  // array[5] = array[4];
  // console.log(array, 'array');
  // array[4] = array[3];
  // console.log(array, 'array');
  // array[3] = array[2];
  // console.log(array, 'array');
  // array[2] = array[1];
  // console.log(array, 'array');
  // array[1] = array[0];
  // console.log(array, 'array');
  var i;
  for (i = rightIndex; i + 1 >= 0 && value < array[i]; i--) {
    array[i + 1] = array[i];
    console.log(array, 'array');
  }
  array[i + 1] = value;
};

// combine if & else if
// remove if from for loop

var ex = [3, 5, 7, 11, 13, 2, 9, 6];
// var ex = [2, 3, 7, 8, 10, 13, 5];

insert(ex, 4, 2);
insert(ex, 5, 9);
insert(ex, 6, 6);

// insert(ex, 5, 5);
console.log(ex);
