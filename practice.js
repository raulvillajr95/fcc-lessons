function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName()
player2.sayName()


// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
//   this.info = function() {
//     return `${title} by ${author}, ${pages}, ${read}`
//   }
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
// console.log(theHobbit.info())