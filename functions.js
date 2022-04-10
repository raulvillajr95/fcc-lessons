const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

let xixi = 0
const renderFrameworks = frontEndFrameworks.map(function(n, i) {
  return {i}
})

const newArr = frontEndFrameworks.map(v => ({isActive: true, v}))

console.log(renderFrameworks)
console.log(newArr)
//console.log(frontEndFrameworks.indexOf('Ember'))

/*
-everything works, just need to add unique key attributes
*/