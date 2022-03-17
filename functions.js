function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(Object.keys(source))){
      arr.push(collection[i])
    }
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

//console.log(Object.values(obbhy))

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/