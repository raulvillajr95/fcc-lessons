
/*
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

let javascript_freelancers = freelancers.filter(x => x.skill == "JavaScript")
console.log(javascript_freelancers)
*/


function diffArray(arr1, arr2) {
  let merged = arr1.concat(arr2)
  let newArr = merged.filter(function(n){
    return arr1.includes(n) === false && !arr2.includes(n) === false
  })


  return newArr
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/*
ideas 
-loop through each arr1
-test if each item in arr1 is in arr2, using some()??
-if false, add to new arr?
-repeat but now test arr2 items in arr1
-test different arrays
*/