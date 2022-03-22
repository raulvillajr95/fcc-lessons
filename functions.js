function uniteUnique(arr) {
  let argi = []
  for (let i = 0; i < arguments.length; i++) {
    argi.push(arguments[i])
  }

  let toget = []
  for (let j = 0; j < argi.length; j++) {
    for (let k = 0; k < argi[j].length; k++) {
      toget.push(argi[j][k])
    }
  }

  let final = []
  for (let l = 0; l < toget.length; l++) {
    if (final.indexOf(toget[l]) == -1) {
      final.push(toget[l])
    }
  }
  return final
}

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))

/*
ideas 
-run through argi
-if number is not in argi, add it
-
*/