// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function() {
//     console.log(`Hi! I'm ${this.name}.`);
//   }
//   return obj;
// }
// const salva = createPerson('Salva')
// console.log(salva.name)
// salva.introduceSelf()
// const frankie = createPerson('Frankie')
// console.log(frankie.name)
// frankie.introduceSelf()

function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}

const salva = new Person('Salva');
console.log(salva.name);
salva.introduceSelf();

const frankie = new Person('Frankie');
console.log(frankie.name);
frankie.introduceSelf();

const myNotification = new Notification('Hello!');