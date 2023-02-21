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

function reverseStr(word) {
  if (word.length === 1) {
    return word;
  } else {
    return (
      word.slice(word.length - 1) + reverseStr(word.slice(0, word.length - 1))
    );
  }
}
console.log(reverseStr('freeCodeCamp'));
