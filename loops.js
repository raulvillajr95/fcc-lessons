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

function partial(arr, str) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].toLowerCase().match(str), arr[i]);
    if (arr[i].toLowerCase().match(str.toLowerCase())) {
      newArray.push(arr[i]);
    }
  }
  return newArray.length == 0 ? ['Empty'] : newArray;
}
console.log(partial(['ho', 'milk', 'rcury', 'fish'], 'me'));
