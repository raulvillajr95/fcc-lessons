/*
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
*/

//console.log(Object.values(obbhy))

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/

let people = [
  {name: "aaron", age: 65},
  {name: "beth", age: 15},
  {name: "cara", age: 13},
  {name: "daniel", age: 3},
  {name: "ella", age: 25},
  {name: "fin", age: 16},
  {name: "george", age: 18},
]

let range = {
  lower: 13,
  upper: 16
}

let teenagers = people.filter(function(person) {
  return person.age >= this.lower && person.age <= this.upper;
}, range)

console.log(teenagers)