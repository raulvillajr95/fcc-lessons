/* Exercise 3-6
Enter plaintext, receive ciphertext
BUT array has to be randomized
*/

function removeOneFromArr(arr, ind) {
  let cop = [...arr]
  if (ind > -1) {
    cop.splice(ind, 1)
  }
  return cop
}

let charry = ['A','B',' ','C','D','?','E','F','!','G','H',',','I','J',':','K','L',';','M','N','-','O','P','"','Q','R','=','S','T','+','U','V','~','W','X','@','Y','Z']

let characters = randomizeCharsInArray(charry)

function randomizeCharsInArray(arr) {
  let rand = []
  let copChar = [...arr]
  for (let i = 0; i < arr.length; i++) {
    let randomInt = Math.floor(Math.random() * copChar.length)
    rand.unshift(copChar[randomInt])
    let firstChar = rand[0]
    copChar = removeOneFromArr(copChar, copChar.indexOf(firstChar))
  }
  return rand
}

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

function unReturnNewChar(ciph) {
  let ind = characters.indexOf(ciph)
  if (ind < 7) {
    return characters[ind+31]
  } else if (ind >= 7) {
    return characters[ind-7]
  }
}
function unCipher(cipher) {
  let unCiphered = []
  for (let i = 0; i < cipher.length; i++) {
    unCiphered.push(unReturnNewChar(cipher[i]))
  }
  return unCiphered.join('')
}

console.log(cipher('WHAT'))

/*
Remove one item from Array
*/