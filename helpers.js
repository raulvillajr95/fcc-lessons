/* 
list of useful functions
like functions.js, but some of these work with the DOM
*/

// Load set Id and load element to a container
function loadElemToContainer(container, element, id) {
  let containerElem = document.querySelector(container);
  let newElem = document.createElement(element);
  containerElem.appendChild(newElem);
}

// Add an attribut to element
function addAttributeToElem(element, attName, attValue) {
  let elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}

// Add text to an element
function addTextToElem(element, text) {
  let elem = document.querySelector(element);
  elem.textContent = text;
}

// return string version of european num format
let eurPointsFormat = ((num) => {
  let strNum = num.toString()
  if (num >= 1000 || num <= -1000) {
    return strNum.slice(0, -3) + '.' + strNum.slice(-3, strNum.length)
  } else {
    return strNum
  }
})

// Deleter every item in element
function clearDisplay(element) {
  let elem = document.querySelector(element);
  let childrenCount = elem.children.length;
  for (let i = 0; i < childrenCount; i++) {
    elem.children[0].remove()
  }
}