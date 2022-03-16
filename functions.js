
/*
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

let javascript_freelancers = freelancers.filter(x => x.skill == "JavaScript")
console.log(javascript_freelancers)
*/


function destroyer(arr) {
  let main = [...arguments][0]
  let ends = [...arguments].slice(1)
  let final = []
  for (let i = 0; i < main.length; i++) {
    if(!ends.includes(main[i])) {
      final.push(main[i]);
    }
  }

  return final
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
ideas 
-loop through each arr1
-test if each item in arr1 is in arr2, using some()??
-if false, add to new arr?
-repeat but now test arr2 items in arr1
-test different arrays
-includes might be a strong option here
*/