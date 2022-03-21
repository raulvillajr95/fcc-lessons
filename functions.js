function translatePigLatin(str) {
  if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {
    return 'vowel'
  } else {
    return 'consonant'
  }
  //return str[0];
}

console.log(translatePigLatin("california"))

/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/