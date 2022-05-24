/*
W 'Last loop value': 1

L 'Which values get shown by the "for" loop?'
1. 0, 1, 2, 3, 4
2. 1, 2, 3, 4,

W 'Output even numbers in the loop':
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

W 'Replace "for" with "while"':
let j = 0;
while (j < 3) {
  console.log(`number ${j}!`);
  j++;
}

W 'Repeat until the input is correct':
while (true) {
  let num = prompt('Pick a number greater than 100:')
  if (num > 100 || num === '') {
    alert('Correct')
    break;
  } else {
    alert('Please pick another number.')
  }
}

W 'Output prime numbers':
function primes(n) {
  let listy = []
  for (let i = 2; i <= n; i++) {
    let list = []
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        list.push(j)
      } else {
        continue
      }
    }
    if (list.length == 1) {
      listy.push(i)
    }
    list = []
  }
  console.log(listy)
}
*/