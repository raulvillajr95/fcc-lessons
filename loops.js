/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 */

// function isSubset(array1, array2) {
//   let largerArray;
//   let smallerArray;

//   if (array1.length > array2.length) {
//     largerArray = array1;
//     smallerArray = array2;
//   } else {
//     largerArray = array2;
//     smallerArray = array1;
//   }

//   for (let i = 0; i < smallerArray.length; i++) {
//     let foundMatch = false;
//   }
//

function sortNumFirstArray(arr) {
  let len = arr.length;
  let emp = [];
  let highest = [0, ,];
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] > highest[0]) {
        highest = arr[i];
      }
    }
    emp.unshift(highest);
    let index = arr.indexOf(highest);
    if (index > -1) {
      arr.splice(index, 1);
    }
    highest = [0, ,];
  }
  return emp;
}

function sortByStrLength(arr) {
  let arrWLength = [];

  for (let i = 0; i < arr.length; i++) {
    arrWLength.push([arr[i].length, arr[i]]);
  }

  let sortedWLength = sortNumFirstArray(arrWLength);

  let sortedNoLength = [];

  for (let j = 0; j < sortedWLength.length; j++) {
    sortedNoLength.push(sortedWLength[i][1]);
  }
  return sortedWLength;
}
console.log(sortByStrLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));
