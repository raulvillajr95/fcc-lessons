function fearNotLetter(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let splitted = str.split('')
  let correctR = []
  for (let i = alph.indexOf(str[0]); i < str.length+alph.indexOf(str[0]); i++) {
    correctR.push(alph[i]);
  }
  for (let j = 0; j < splitted.length; j++) {
    if (splitted[j] != correctR[j]) {
      return correctR[j]
    }
  }
}

console.log(fearNotLetter("stvwx"))

/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/