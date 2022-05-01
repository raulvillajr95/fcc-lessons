/*
Square within a square
*/

function topAndBottomOfSquare() {
  let outer = 20
  console.log('#'.repeat(outer))
  console.log('#' + ' '.repeat(outer-2) + '#')
  console.log('#'.repeat(outer))
}

function twentyByTenSquare() {
  let outer = 20
  console.log('#'.repeat(outer))
  for (let i = 1; i <= (outer/2)-2; i++) {
    console.log('#' + ' '.repeat(outer-2) + '#')
  }
  console.log('#'.repeat(outer))
}

function squareInSquare() {
  let outer = 20
  let inner = outer-6
  console.log('#'.repeat(outer))
  console.log('#' + ' '.repeat(outer-2) + '#')
  console.log('#' + ' '.repeat(2) + '#'.repeat(inner) + ' '.repeat(2) + '#')

  for (let i = 0; i < 4; i++) {
    console.log('#' + ' '.repeat(2) + '#' + ' '.repeat(inner-2) + '#' + ' '.repeat(2) + '#')
  }

  console.log('#' + ' '.repeat(2) + '#'.repeat(inner) + ' '.repeat(2) + '#')
  console.log('#' + ' '.repeat(outer-2) + '#')
  console.log('#'.repeat(outer))
}

squareInSquare()