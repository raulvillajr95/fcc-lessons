// 2 ✅ Write factory method that returns an object
let Person = function(name) {
  let logOut = () => {
    return `${name} has logged out!`
  }

  return {logOut}
}

let raul = Person('Raul');
console.log(raul.logOut())


// ✅ 6 Use inheritance in objects using the factory pattern
let Person2 = function(name) {
  let logIn = () => {
    return `${name} has logged in!`
  }

  let {logOut} = Person(name);

  return {
    logIn,
    logOut
  }
}

let jose = Person2('Jose');
console.log(jose.logOut())