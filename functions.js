function fearNotLetter(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let splitted = str.split('')
  for (let i = alph.indexOf(str[0]); i < splitted.length+alph.indexOf(str[0]); i++) {
    if (alph[i] !== splitted[i]) {
      return alph[i]
    }
  }
}

console.log(fearNotLetter("abce"))

/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/