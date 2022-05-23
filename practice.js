const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

for (let i = 0; i < myArray.length; i++) {
  list.innerHTML += '<li>' + myArray[i] + '</li>'
}

const section = document.querySelector('section');
section.appendChild(list);