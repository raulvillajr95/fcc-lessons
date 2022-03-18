let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] += ' extra'
  return word.length < 6
})
console.log(modifiedWords)

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})
console.log(appendedWords)

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})
console.log(deleteWords)

/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/