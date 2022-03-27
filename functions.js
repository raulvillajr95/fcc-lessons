function binaryAgent(str) {
  let splitted = str.split(' ')

  let numbers = []
  for (let i = 0; i < splitted.length; i++) {
    numbers.push(splitted[i]);
  }

  let final = []
  for (let i = 0; i < numbers.length; i++) {
    final.push(numbers[i].toString());
  }

  return final;
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