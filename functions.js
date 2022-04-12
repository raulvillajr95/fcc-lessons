const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

let adding = [...todos]
let index = 2
adding.splice(index, 1)


console.log(adding)
console.log(todos)