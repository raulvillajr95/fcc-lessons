function whatIsInAName(collection, source) {
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i].hasOwnProperty('last'))
  }
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/