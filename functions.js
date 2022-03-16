
/*
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

let javascript_freelancers = freelancers.filter(x => x.skill == "JavaScript")
console.log(javascript_freelancers)
*/


function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourceK = source[0]
  let resolution = collection.filter(function(n) {
    let 
    return sourceK == sourceV
  })
  // Only change code above this line
  return resolution;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/