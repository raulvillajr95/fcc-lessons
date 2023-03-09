/**
 *
 *
 *
 *
 *
 *
 */

// if looping, do recursion
function multiTable(num, counter = 1) {
  if (counter >= 10) {
    return `${counter} * ${num} = ${num * counter}`;
  }
  return (
    `${counter} * ${num} = ${num * counter}\n` + multiTable(num, counter + 1)
  );
}
console.log(multiTable(50));
