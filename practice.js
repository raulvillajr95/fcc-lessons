let ulElementChildNodes = document.querySelector('ul').childNodes;
console.log(ulElementChildNodes)

Array.prototype.forEach.call(ulElementChildNodes, function(item) {
  console.log(item);
})