/**
 *
 *
 *
 *
 *
 *
 */

class Matrix {
  constructor(matrixStr) {
    this.matrixStr = matrixStr;
  }

  get rows() {
    let splat = this.matrixStr.split('\n') 
    let arr = []
    for (let i = 0; i < splat.length; i++) {
      let row = []
      let splatRow = splat[i].split(' ')
      for (let j = 0; j < splatRow.length; j++) { 
        row.push(Number(splatRow[j]))
      }
      arr.push(row)
    }
    return arr
  }

  get columns() {
    let splat = this.matrixStr.split('\n') // column length
    let rowLength = splat[0].split(' ').length
    let arr = []

    for(let i = 0; i < splat.length; i++) {
      for (let j = 0; j < rowLength; j++) {
        console.log(i, j)
      }
    }

    return arr   
  }
}

let matrix = new Matrix('1 2 3\n4 5 6\n7 8 9')
console.log(matrix.columns[2])
