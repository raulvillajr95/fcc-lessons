/**
 *
 *
 *
 *
 *
 *
 *
 */

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// function contains(list, num) {
//   if (Object.keys(list).length === 0) {
//     return list === num;
//   } else {
//     return contains(list[Object.keys(list)[0]], num);
//   }
// }

// console.log(contains(nestedObject, 'foo2'));
// console.log(Object.values(nestedObject.data.info.stuff.thing));

function contains(list, val) {
  if (Object.keys(list).length > 1) {
    return Object.values(list).includes(val);
  } else {
    return contains(list[Object.keys(list)[0]], val);
  }
}

// return arr of value and check

console.log(contains(nestedObject, 'foo2'));
