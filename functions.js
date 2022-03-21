function myReplace(str, before, after) {
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
  } else if (before.charAt(0) == before.charAt(0).toLowerCase()) {
    return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
  }
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))

/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/