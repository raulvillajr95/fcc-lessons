//Make new data
function makeNewData() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  letters = letters.slice(0, Math.floor(Math.random() * 26)).split('')
  document.getElementById('dataDisplayer').innerHTML = letters;
  redraw(letters);
}
//Redraw entire board
function redraw(receivedData) {
  d3.select('#content')
    .selectAll('div')
    .data(receivedData)
    .enter()
    .append("div")
    .text((d, i) => d); 
}

makeNewData()