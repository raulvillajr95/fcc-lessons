
/*
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

let javascript_freelancers = freelancers.filter(x => x.skill == "JavaScript")
console.log(javascript_freelancers)
*/


function diffArray(arr1, arr2) {
  let merged = arr1.concat(arr2)
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      arr.push(arr2[j])
    }
    
  }
  return arr
}

console.log(diffArray([1, 2, 1.1, 3, 5], [1, 2, 3, 4, 5]));

/*
ideas 
-loop through each arr1
-test if each item in arr1 is in arr2, using some()??
-if false, add to new arr?
-repeat but now test arr2 items in arr1
-test different arrays
-includes might be a strong option here
*/