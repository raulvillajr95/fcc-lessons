window.addEventListener('mousemove', function() {
  console.log('moving over window');
}, false)

document.addEventListener('mousemove', function() {
  console.log('moving over document')
}, false)

document.querySelector('div').addEventListener('mousemove', function() {
  console.log('moving over div')
}, false)