const container = document.querySelector('#container')

// 1.
const para = document.createElement('p')
para.textContent = 'Hey I\'m red!'
para.setAttribute('style','color: red;')
container.appendChild(para)

// 2.
const heading3 = document.createElement('h3')
heading3.textContent = "I'm a blue h3!"
heading3.setAttribute('style', 'color: blue;')
container.appendChild(heading3)

// 3.
const div = document.createElement('div')
div.setAttribute('style', 'border: 1px solid black; background-color: pink;')
/* ------ */
const heading1 = document.createElement('h1')
heading1.textContent = "I'm in a div"
div.appendChild(heading1)
const para2 = document.createElement('p')
para2.textContent = "ME TOO!"
div.appendChild(para2)
/* ------ */
container.appendChild(div)


console.log(container)