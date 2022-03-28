const Person = function(firstAndLast) {
  let splitted = firstAndLast.split(' ')

  this.getFirstName = function() {return splitted[0]}
  this.getLastName = function() {return splitted[1]}
  this.getFullName = function() {return splitted.join(' ')}
  this.setFirstName = function(first) {
    splitted.shift()
    splitted.unshift(first)
  }
  this.setLastName = function(last) {
    splitted.pop()
    splitted.push(last)
  }
  this.setFullName = function(fAndLast) {
    let split2 = fAndLast.split(' ')

    splitted.shift()
    splitted.unshift(split2[0])

    splitted.pop()
    splitted.push(split2[1])
  }
};

const bob = new Person('Bob Ross');

bob.setFullName("Haskell Curry")

console.log(bob.getFullName());