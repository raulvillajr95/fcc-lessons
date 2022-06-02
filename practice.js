const tabPanel = document.querySelector("tab-panel");

const tab1 = document.querySelector('[data-tabname="one"]')
const tab2 = document.querySelector('[data-tabname="two"]')
const tab3 = document.querySelector('[data-tabname="three"]')
let tabs = [tab1, tab2, tab3]

function asTabs(node) {
  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button")
    button.innerText = `${tabs[i].getAttribute("data-tabname")}`
    button.className = `button${i+1}`
    // set onclick attributes
    button.setAttribute('onclick', `visibility('tab${i+1}')`)
    tabPanel.prepend(button)
  }
}
asTabs(document.querySelector("tab-panel"));

let buttons = {
  tab1 : document.querySelector('.button1'),
  tab2 : document.querySelector('.button2'),
  tab3 : document.querySelector('.button3')
}

// make all 3 invisible
function invisible() {
  tab1.style.display = 'none';
  tab2.style.display = 'none';
  tab3.style.display = 'none';
}
invisible()

function visibility(tbStr) {
  console.log(buttons[tbStr])
  if (tbStr == 'tab1') {
    invisible()
    tab1.style.display = "block";
  } else if (tbStr == 'tab2') {
    invisible()
    tab2.style.display = "block";
  } else if (tbStr == 'tab3') {
    invisible()
    tab3.style.display = "block";
  }
}