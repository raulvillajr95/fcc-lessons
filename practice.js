/*
ISBN 10 & 13
*/

function isbn10(str) {
  let added = 0
  let cnt = 0
  for (let i = 10; i >= 1; i--) {
    added += (str[cnt] * i)
    cnt += 1
  }
  if (added % 11 == 0) {
    console.log('Valid')
  } else {
    console.log('Invalid code')
  }
}