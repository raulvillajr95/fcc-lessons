const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

// map()
const correctedWeeklyReadings = weeklyReadings.map(reading => reading + 1.5)

// filter()
const colderDays = weeklyReadings.filter(dayTemperature => dayTemperature < 20);

//  reduce()
const numbers = [1,2,3,4,5]
const factorial = numbers.reduce((acc, item) => acc * item, 1)

// some()
const persons = [{name: 'Person 1', age: 32}, {name: 'Person 2', age: 40}]
if(persons.some(person => person.age > 35)) {
  console.log('found people')
}

// every()
const entries = [{id: 1}, {id: 2}, {id: 3}]
if (entries.every(entry => Number.isInteger(entry.id) && entry.id > 0)) {
  console.log("All entries have id")
}

//includes()
console.log(numbers.includes(4))
const name = "Ankush"
console.log(name.includes('Ank'))

console.log(numbers.flat());