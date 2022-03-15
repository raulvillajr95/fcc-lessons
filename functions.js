const score = {
  Nathan: 8,
  Mia: 10,
  Jack: 7,
  Sunny: 6
}

const scoreArr = Object.entries(score)

let filteredArr = scoreArr.filter(function([key, value]) {
  return key !== 'Jack';
})


console.log(filteredArr)