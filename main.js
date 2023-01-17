


// Count vowels
function vo(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (let i = 0; i < str.length; i++) {
    console.log(str[i] in vowels)
    if (vowels.includes(str[i].toLowerCase())) {
      count += 1
    }
  }
  return count
}

console.log(vo('using our site'))
