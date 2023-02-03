/**
 *
 *
 *
 *
 *
 *
 */

function filter_list(arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      nums.push(arr[i]);
    }
  }
  return nums;
}

// console.log(filter_list(["a", 1, "b", "2", "c", 3]));
