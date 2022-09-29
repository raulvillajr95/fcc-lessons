let num = 10010100101010

while (num !== 1) {
  if (num % 2 === 1) {
    num = (num * 3) + 1;
  } else if (num % 2 === 0) {
    num = num / 2;
  }
  console.log(num)
}