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

// for
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

// while
function totalIntegers2(arr) {
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
  // while (typeof arr[arr] == 'object') {

  // } else {
  //   arr[i]
  // }
}
// recursion
function totalIntegers3(arr) {
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
// console.log(totalIntegers3(exampleArr));

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

// second layer(recursive)
function secondLayer3(arr, i = 0) {
  if (i < arr.length) {
    // console.log(arr[i], 'f3');

    let j = 0;
    if (typeof arr[i] == 'object') {
      console.log(arr[i], 'f3 obj');
      ///////// mess with this(second layer)
      if (i < arr[i].length) {
        let j = 0;
        if (typeof arr[i] == 'object') {
          console.log(arr[i], 'f3 obj');
        } else {
          console.log(arr[i], 'f3 else');
        }

        i++;
        return secondLayer3(arr[i], i);
      } else {
        console.log('end 1');
        return;
      }
      /////////
    } else {
      console.log(arr[i], 'f3 else');
    }

    i++;
    return secondLayer3(arr, i);
  } else {
    console.log('end 2');
    return;
  }
}
secondLayer3(exampleArr);

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
