let tenIntegerArray = [4,5,9,12,-4,0,-57,30987,-287,1]

let highest = 0;

for (let i = 0; i < tenIntegerArray.length; i++) {
  if (tenIntegerArray[i] > highest) {
    highest = tenIntegerArray[i]
  }
}

console.log(highest)