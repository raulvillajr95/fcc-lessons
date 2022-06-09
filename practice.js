document.querySelector('#styleElement').sheet.insertRule('p{color:red}', 1)

console.log(document.querySelector('#styleElement').sheet.cssRules[1].cssText)

document.querySelector('#styleElement').sheet.deleteRule(1)

console.log(document.querySelector('#styleElement').sheet.cssRules[1].cssText)