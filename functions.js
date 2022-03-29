function palindrome(str) {
  let what = str.match(/[A-Za-z0-9]+/g)
  let what2 = what.join('')
  let lowWhat2 = []
  for (let i = 0; i < what2.length; i++) {
    lowWhat2.push(what2[i].toLowerCase());
  }

  let almReversed = []
  for (let i = what2.length-1; i >= 0; i--) {
    almReversed.push(what2[i].toLowerCase())
  }
  let reversed = almReversed.join('')
  return reversed == lowWhat2.join('')
}

console.log(palindrome("A man, a plan, a canal. Panama"));