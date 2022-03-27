function binaryAgent(str) {
  let splitted = str.split(' ')

  let list = [];
  for (let i = 0; i < splitted.length; i++) {
    let temp = 0;
    if (splitted[i][7] == '1') {
      temp += 1;
    }
    if (splitted[i][6] == '1') {
      temp += 2;
    }
    if (splitted[i][5] == '1') {
      temp += 4;
    }
    if (splitted[i][4] == '1') {
      temp += 8;
    }
    if (splitted[i][3] == '1') {
      temp += 16;
    }
    if (splitted[i][2] == '1') {
      temp += 32;
    }
    if (splitted[i][1] == '1') {
      temp += 64;
    }
    if (splitted[i][0] == '1') {
      temp += 128;
    }
    list.push(temp)
  }

  return String.fromCharCode(...list);
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

/*
to-do:
-make exceptions for objects, they pass

ideas:
-if boolean true get value to new array
-maybe use reduce??
-use a while loop?
set it up somehow so that after every iteration it goes deeper
until it's not a loop
*/