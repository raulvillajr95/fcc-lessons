/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
function gooseFilter(birds, counter = birds.length - 1) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ];

  if (geese.includes(birds[counter])) birds.splice(counter, 1);
  if (counter <= 0) {
    return birds;
  } else {
    return gooseFilter(birds, counter - 1);
  }
}
console.log(
  gooseFilter([
    'Mallard',
    'Hook Bill',
    'African',
    'Crested',
    'Pilgrim',
    'Toulouse',
    'Blue Swedish',
  ])
);
