function truthCheck(collection, pre) {
  let secondA = collection[1]
  return secondA[pre] == 1
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))

/*
to-do:
-make sure its a truthy value
this could be true, anything greater than 0, etc.

ideas:
-turn value into boolean and check if it's true?
*/