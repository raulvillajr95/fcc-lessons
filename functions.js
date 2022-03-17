function whatIsInAName(collection, source) {
  // Only change code below this line
  let sourceK = Object.keys(source)[0]
  let sourceV = Object.values(source)[0]
  let resolution = collection.filter(function(n) {
    return this.source;
  })
  // Only change code above this line
  return resolution;
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

let obbhy = { last: "Capulet" };

//console.log(Object.values(obbhy))

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/