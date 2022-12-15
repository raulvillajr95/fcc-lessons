// list of useful functions
// like functions.js, but these work with the DOM

function loadElemToContainer(container, element, id) {
  let containerElem = document.querySelector(container);
  let newElem = document.createElement(element);
  newElem.setAttribute('id', id)
  containerElem.appendChild(newElem);
}

function addAttributeToElem(element, attName, attValue) {
  let elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}

function addTextToElem(element, text) {
  let elem = document.querySelector(element);
  elem.textContent = text;
}