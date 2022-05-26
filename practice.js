const div = document.createElement('div')

// 3 ways to turn text blue:

// 1
div.style.color = 'blue';

// 2
div.style.cssText = 'color: blue; background: white;';

// 3
// div.setAttribute('style', 'color: blue; background: white;');

console.log(div)