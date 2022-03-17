function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let ar1 = collection.filter(function(element, index, source) {
    return source
  })

  // Only change code above this line
  return ar1;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/