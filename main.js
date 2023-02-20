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
function printList(lst) {
  while (lst.next !== null) {
    console.log(lst.value);
    lst = lst.next;
  }
  console.log(lst.value);
}
printList(list);

// // Linked List(Recursive)
// function printList(lst, y = lst.value) {
//   if (lst.next === null) {
//     return lst.value;
//   } else {
//     console.log(y);
//     return printList(lst.next, lst.next.value);
//   }
// }
// console.log(printList(list));
