// Load set Id and load element to a container
function loadElemToContainer(container, element, id) {
  const containerElem = document.querySelector(container);
  const newElem = document.createElement(element);
  newElem.setAttribute('id', id);
  containerElem.appendChild(newElem);
}
// Add an attribute to element
function addAttributeToElem(element, attName, attValue) {
  const elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}
// Add text to an element
function addTextToElem(element, text) {
  const elem = document.querySelector(element);
  elem.textContent = text;
}

// Delete every item in element
function clearDisplay(element) {
  const elem = document.querySelector(element);
  const childrenCount = elem.children.length;
  for (let i = 0; i < childrenCount; i += 1) {
    elem.children[0].remove();
  }
}

// return string version of european num format
let eurPointsFormat = (num) => {
  let strNum = num.toString();
  if (num >= 1000 || num <= -1000) {
    return strNum.slice(0, -3) + '.' + strNum.slice(-3, strNum.length);
  } else {
    return strNum;
  }
};
