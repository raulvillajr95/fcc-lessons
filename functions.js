function truthCheck(collection, pre) {
  let coLen = collection.length
  let final = collection.filter(function(n) {
    return Boolean(n[pre])
  })
  return coLen == final.length
}

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"))

/*
to-do:
-make sure its a truthy value
this could be true, anything greater than 0, etc.

ideas:
-turn value into boolean and check if it's true?
*/