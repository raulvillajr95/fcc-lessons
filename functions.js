function telephoneCheck(str) {
  if (str[3] == '-' && str[7] == '-') {
    return true
  } else if (str[0] == '(' && str[4] == ')' && str[8] == '-') {
    return true
  } else if (str[0] == '(' && str[4] == ')' && str[5] == ' ' && str[9] == '-') {
    return true
  } else if (str[3] == ' ' && str[7] == ' ') {
    return true
  } else if (str.length == 10 && isNaN(str) !== true) {
    return true
  } else if (str[1] == ' ' && str[5] == ' ' && str[9] == ' ') {
    return true
  } else if (str[0] == '1' && str[1] == ' ' && str[5] == '-' && str[9] == '-') {
    return true
  } else if (str[0] == '1' && str[1] == ' ' && str[2] == '(' && str[6] == ')' && str[7] == ' ' && str[11] == '-') {
    return true
  } else if (str[0] == '1' && str[1] == '(' && str[5] == ')' && str[9] == '-') {
    return true
  } else {
    return false
  }
}

console.log(telephoneCheck("1 (555) 555-5555"));

/*

to-do:
-need to straighten it out

*/