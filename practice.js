const tabPanel = document.querySelector("tab-panel");

const tab1 = document.querySelector('[data-tabname="one"]')
const tab2 = document.querySelector('[data-tabname="two"]')
const tab3 = document.querySelector('[data-tabname="three"]')
let tabs = [tab1, tab2, tab3]

function asTabs(node) {
  let nodeSet = new Array(node.children)

  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button")
    button.innerText = `${tabs[i].getAttribute("data-tabname")}`
    tabPanel.prepend(button)
  }

  console.log(nodeSet)
  console.log(node.div)
}
asTabs(document.querySelector("tab-panel"));