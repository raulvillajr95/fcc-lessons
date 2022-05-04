/*
Finding the Mode
-return the value that appears most often

Plan:
-from full list, create individual once only value list
-count number of times individual value appears in big list
-if value is highest or equal, push to final list
*/

let surveyData = [4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10]

let counter = 0

let countOfEach = []

let counterOfEach = []
for (let i = 0; i < surveyData.length; i++) {
  for (let j = 0; j < surveyData.length; j++) {
    if (surveyData[i] == surveyData[j]) {
      counter += 1
      countOfEach.push(surveyData[j])
    }
    counterOfEach.push(counter)
    counter = 0
  }
}

console.log(counterOfEach)