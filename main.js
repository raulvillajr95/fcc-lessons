/**
 *
 *
 *
 */

/* 
extract first half of string
*/
// function foo(str) {
//   let len = str.length / 2;
//   return str.slice(0, len);
// }

// console.log(foo("stringyy"));

let ordersRemaining = [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
];
function remainingOrders(timeLeft, orders) {
  let count = 0;
  let initialLengthOfOrders = orders.length;
  for (let i = 0; count < timeLeft && i < initialLengthOfOrders; i++) {
    console.log("oh");
    if (orders[0] === "Pure Strawberry Joy") {
      count += 0.5;
      console.log("P");
      orders.splice(0, 1);
    } else if (orders[0] === "Energizer" || orders[0] === "Green Garden") {
      count += 1.5;
      console.log("EG");
      orders.splice(0, 1);
    } else if (orders[0] === "Tropical Island") {
      count += 3;
      console.log("T");
      orders.splice(0, 1);
    } else if (orders[0] === "All or Nothing") {
      count += 5;
      console.log("alll");
      orders.splice(0, 1);
    } else {
      count += 2.5;
      console.log("Rand");
      orders.splice(0, 1);
    }
  }
  console.log(count);
  return orders;
}

/**
 * 6, 10, 10, 8, 6, 10
 */

console.log(remainingOrders(13, ordersRemaining), "final");
