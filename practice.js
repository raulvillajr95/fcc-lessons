const balloon = document.querySelector('p')
let fontS = 10;
balloon.style.fontSize = `${fontS}px`;

window.document.addEventListener("keydown", event => {
  if (fontS > 200) {
    balloon.textContent = '💥'
  } else {
    balloon.textContent = '🎈'
  }
  if (event.key == "ArrowDown") {
    console.log('You pressed DOWN')
    console.log(fontS)
    fontS *= 0.9
    balloon.style.fontSize = `${fontS}px`
  } else if (event.key == "ArrowUp") {
    console.log('You pressed UP')
    console.log(fontS)
    fontS *= 1.1
    balloon.style.fontSize = `${fontS}px`
  }
})