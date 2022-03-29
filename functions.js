function rot13(str) {
  let codesConverted = []
  let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] in abc) {
      switch (str.charCodeAt(i)) {
        case 78:
          codesConverted.push(65)       
          break;
        case 79:
          codesConverted.push(66)       
          break;
        case 80:
          codesConverted.push(67)       
          break;
        case 81:
          codesConverted.push(68)       
          break;
        case 82:
          codesConverted.push(69)       
          break;
        case 83:
          codesConverted.push(70)       
          break;
        case 84:
          codesConverted.push(71)       
          break;
        case 85:
          codesConverted.push(72)       
          break;
        case 86:
          codesConverted.push(73)       
          break;
        case 87:
          codesConverted.push(74)       
          break;
        case 88:
          codesConverted.push(75)       
          break;
        case 89:
          codesConverted.push(76)       
          break;
        case 90:
          codesConverted.push(67)       
          break;
        default:
          codesConverted.push(str.charCodeAt(i) + 13)
      }
    } else {
      codesConverted.push(str.charCodeAt(i))
    }
  }

  let backToString = []
  for (let i = 0; i < codesConverted.length; i++) {
    backToString.push(String.fromCharCode(codesConverted[i]));
  }

  return backToString
}

console.log(rot13("SERR PBQR PNZC"));

/*

to-do:
-need to straighten it out

*/