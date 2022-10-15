class Animal {
  constructor (name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  static nextToEat(animals) {
    const sortedByLeastEnergy = animals.sort((a,b) => {
      return a.energy - b.energy
    })

    return sortedByLeastEnergy[0].name
  }
}

const leo = new Animal('Leo', 7)

//////////////////////////////

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy)

    this.breed = breed
  }
  bark() {
    console.log('Woof Woof!')
    this.energy -= .1
  }
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')
console.log(charlie.constructor)

//////////////////////////////

function Cat(name, energy, declawed) {
  Animal.call(this, name, energy)

  this.declawed = declawed
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.meow = function() {
  console.log('Meow!')
  this.energy -= .1
}