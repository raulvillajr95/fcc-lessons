const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

let bookTitles = books.map(a => {
  return a.title;
})

/*
map
reduce
filter
*/

console.log(bookTitles)