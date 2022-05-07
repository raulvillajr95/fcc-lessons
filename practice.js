/* Exercise 3-3 
Enter plaintext, receive ciphertext
*/

const characters = ['A','B','.','C','D','?','E','F','!','G','H',',','I','J',':','K','L',';','M','N','-','O','P','"','Q','R','=','S','T','+','U','V','~','W','X','@','Y','Z']
function returnNewChar(ett) {
  let ind = characters.indexOf(ett)
  if (ind > 30) {
    return characters[ind-31]
  } else if (ind <= 30) {
    return characters[ind+7]
  }
}
function cipher(word) {
  let ciphered = []
  for (let i = 0; i < word.length; i++) {
    ciphered.push(returnNewChar(word[i]))
  }
  return ciphered.join('')
}

console.log(cipher('APPLE'))