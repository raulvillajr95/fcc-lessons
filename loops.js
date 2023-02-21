/**
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

// Linked List(Recursive)
function printList(lst, y = lst.value) {
  if (lst.next === null) {
    return lst.value;
  } else {
    console.log(y);
    return printList(lst.next, lst.next.value);
  }
}
console.log(printList(list));

// Linked List Reverse(Recursive)
function reverse(n) {
  console.log(n);
  if (n > 10) {
    return;
  } else {
    return reverse(n + (n - 1));
  }
}
console.log(reverse(5));
