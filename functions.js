function pairElement(str) {
  let splitted = str.split('');
  let final = [];
  for (let i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case 'A':
        final.push(['A','T'])
        break;
      case 'T':
        final.push(['T','A'])
        break;
      case 'C':
        final.push(['C','G'])
        break;
      case 'G':
        final.push(['G','C'])
        break;
    }
  }
  return final
}

console.log(pairElement("ATCGA"))

/*
ideas 
-get index of first appearce 
-slice the rest, that way it wont get multiple appearances of consonant cluster
-create regex condition to split 'thisIs'
-seperate by space, uppercase letters, underscore, and dash
-you might be able to match them if you put em all in one bracket like [\s\_] etc.
*/