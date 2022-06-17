const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`)
  }
}

person.age = 45;
person['name']['last'] = 'Cratchit'

person['eyes'] = 'hazel'
person.farewell = function() {
  console.log('Bye everybody!')
}

const myDataName = 'height'
const myDataValue = '1.75m'
person[myDataName] = myDataValue

console.log(person.height)