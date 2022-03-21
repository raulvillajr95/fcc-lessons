/*
function translatePigLatin(str) {
  let splitted = str.split('')
  let part = str.match(/(?:(?![aeiou])[a-z])+/)[0];
  let partW = str.split(part);

  if (splitted[0] == 'a' || splitted[0] == 'e' || splitted[0] == 'i' || splitted[0] == 'o' || splitted[0] == 'u') {
    return str + 'way'
  } else {
    return //partW+part+'ay'
  }
}
*/


function spinalCase(str) {
  let splitted = str.match(/\W|[A-Z][a-z]+/g)
  let lowered = [];
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] == ' ') {
      continue
    } else if (str.match(/[A-Z]/g).length >=1 ) {
      console.log(splitted[i])
    } else {
      lowered.push(splitted[i].toLowerCase())
      }
  }
  return lowered
}
console.log(spinalCase("thisIsSpinalTap"))


/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/