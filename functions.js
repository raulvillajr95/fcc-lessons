const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

const array1 = [1, 30, 4, 21, 100000]
array1.sort(function(a,b) {
  return a - b;
});


console.log(months);
console.log(array1);
