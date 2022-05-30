/* Build A Table */

const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const mountainsDiv = document.querySelector('#mountains');

const table = document.createElement('table');
const row = document.createElement('tr');

mountainsDiv.appendChild(table);
table.appendChild(row);


/* loop to create heading section */
let headings = ['name', 'height', 'place']
for (let i = 0; i < headings.length; i++) {
  const rowHeading = document.createElement('th')
  rowHeading.innerText = headings[i]
  row.appendChild(rowHeading);
}

/* loop to create body */
let mntKeys = ['name', 'height', "place"]
for (let i = 0; i < MOUNTAINS.length; i++) {
  const mntRow = document.createElement('tr')
  table.appendChild(mntRow)
  for (let j = 0; j < 3; j++) {
    const rowCell = document.createElement('td')

    // make condition for 'height'
    if (j == 1) {
      rowCell.setAttribute('style','text-align: right;')
    }
    rowCell.innerText = MOUNTAINS[i][mntKeys[j]]

    mntRow.appendChild(rowCell)
  }
}

console.log(mountainsDiv)

/*
ideas:
2nd-recreate the sample one
  th's and 1 mountain

-nested for loop??? 3 within 7??
-try stuff out
-reread
*/