/**
 *
 *
 *
 *
 *
 *
 */

function splitTheBill(group) {
  let total = 0;
  let amntPeople = Object.keys(group).length;
  for (const key of Object.keys(group)) {
    total += group[key];
  }
  console.log(total)

  let avg = total / amntPeople;
  console.log(avg)

  for (const key of Object.keys(group)) {
    group[key] -= Number(avg.toFixed(2));
  }

  for (const key of Object.keys(group)) {
    group[key] = Number(group[key].toFixed(2))
  }
  return group;
}
console.log(splitTheBill({
    A: 20, 
    B: 15, 
    C: 10
}))
