function uniteUnique(arr) {
  let argi = []
  for (let i = 0; i < arguments.length; i++) {
    argi.push(arguments[i])
  }
  let final = []
  let notOnes = []
  for (let j = 0; j < argi.length; j++) {
    for (let k = 0; k < argi[j].length; k++) {
      if (argi[j][k] in final) {
        notOnes.push(argi[j][k])
      } else {
        final.push(argi[j][k])
      }
    }
  }
  return final
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

/*
ideas 
-run through argi
-if number is not in argi, add it
-
*/