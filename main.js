/**
 *
 *
 *
 *
 *
 *
 *
 */

var exampleArr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];

// Third layer(for)
function totalIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      for (let j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] == 'object') {
          for (let k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k]);
          }
        } else {
          console.log(arr[i][j]);
        }
      }
    } else {
      console.log(arr[i]);
    }
  }
}
// console.log(totalIntegers(exampleArr));

// second layer(for)
function secondLayer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    } else {
      console.log(arr[i]);
    }
  }
}
// secondLayer(exampleArr);

// first layer(for)
function firstLayer(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], 'f1');
  }
}
// firstLayer(exampleArr);

// countup(for)
function basic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i + 1);
  }
}
// basic(10);

// Third layer(while)
function totalIntegers2(arr) {}

// second layer(while)
function secondLayer2(arr) {
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] == 'object') {
      let j = 0;
      while (j < arr[i].length) {
        console.log(arr[i][j], 'f2');
        j++;
      }
    } else {
      console.log(arr[i], 'f2');
    }
    i++;
  }
}
// secondLayer2(exampleArr);

// first layer(while)
function firstLayer2(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i], 'f2');
    i++;
  }
}
// firstLayer2(exampleArr);

// countup(while)
function basic2(n) {
  let i = 0;
  while (i < n) {
    console.log(i + 1);
    i++;
  }
}
// basic2(10);

// Third layer(recursive)
// base case rule: when we've reached a value, not array
// move along rule:
function totalIntegers3(arr, total = 0) {
  if (typeof arr != 'object') {
    return total;
  } else {
    arr.forEach((e) => {
      if (typeof e == 'number') {
        total += 1;
      }
      console.log(typeof e);
      totalIntegers3(e, total);
    });
  }
  return total;
}
console.log(totalIntegers3(exampleArr), 'end');

// second layer(recursive)
function secondLayer3(arr, i = 0, j = 0) {
  if (i < arr.length) {
    if (typeof arr[i] == 'object') {
      while (j < arr[i].length) {
        console.log(arr[i][j]);
        j++;
      }
    } else {
      console.log(arr[i]);
    }
    i++;
    return secondLayer3(arr, i);
  } else {
    return;
  }
}
// secondLayer3(exampleArr);

// first layer(recursive)
function firstLayer3(arr, i = 0) {
  if (i < arr.length) {
    console.log(arr[i], 'f3');
    i++;
    return firstLayer3(arr, i);
  } else {
    return;
  }
}
// firstLayer3(exampleArr);

// countup(resursive)
function basic3(n, i = 0) {
  if (n > 0) {
    console.log(i + 1);
    i++;
    return basic3(n - 1, i);
  } else {
    return;
  }
}
// basic3(10);

// while loop
// then recursive
