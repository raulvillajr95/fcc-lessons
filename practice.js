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

function PrintStuff (myDocuments) {
  this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
  console.log(this.documents);
}

var newObj = new PrintStuff ("I am a new Object and I can print.");

newObj.print();