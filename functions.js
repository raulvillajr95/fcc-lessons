function addTogether() {
  let args = [...arguments]
  if (args.length == 1) {
    return function(n) {
      return n + args[0]
    }
  } else if (Number(args[0]) !== args[0] || Number(args[1]) !== args[1]) {
    return undefined
  } else {
    return args.reduce((a, b) => a + b)
  }
}
//let lola = addTogether(2)
console.log(addTogether(2,5))

/*
to-do:
-test addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") 
-test addTogether(2)([3])

ideas:
-turn value into boolean and check if it's true?
*/