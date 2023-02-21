/**
 *
 *
 *
 *
 *
 *
 *
 */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Linked List(Loop)
// function printList(lst) {
//   while (lst.next) {
//     console.log(lst.value);
//     lst = lst.next;
//   }
//   console.log(lst.value);
// }
// // printList(list);

// // Linked List Reverse(Loop)
// function reverse(lst, vb = 0) {
// console.log(n, vb);
// if (n === 1) {
//   return 1;
// } else {
//   return reverse(n - 1, vb + n);
// }
// }
// reverse(list);

function countChar(word, char) {
  if (word.length === 1) {
    if (word.slice(word.length - 1) === char) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (word.slice(word.length - 1) === char) {
      return 1 + countChar(word.slice(0, word.length - 1), char);
    } else {
      return countChar(word.slice(0, word.length - 1), char);
    }
  }
}
console.log(countChar('JavaScript', 'a'));
