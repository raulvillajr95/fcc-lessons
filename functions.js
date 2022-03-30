function checkCashRegister(price, cash, cid) {
  let final = {status: 'OPEN', change: []};
  let change = cash - price

  /* Constants */
  let namesAmounts = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.10], ["NICKEL", 0.5], ["PENNY", 0.01]]
  let penny = 0.01
  let nickel = 0.05
  let dime = 0.1
  let quarter = 0.25
  let one = 1
  let five = 5
  let ten = 10
  let twenty = 20
  let hundred = 100

  /* Drawer */
  let fullDrawer = [cid[0][1],cid[1][1],cid[2][1], cid[3][1], cid[4][1], cid[5][1], cid[6][1], cid[7][1], cid[8][1]]
  let pennies = cid[0][1]
  let nickels = cid[1][1]
  let dimes = cid[2][1]
  let quarters = cid[3][1]
  let ones = cid[4][1]
  let fives = cid[5][1]
  let tens = cid[6][1]
  let twenties = cid[7][1]
  let hundreds = cid[8][1]

  let changeList = []
  let changeFloated = change.toFixed(2);

  return changeFloated[changeFloated.length-1];
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/*

to-do:
-from change return what I need if I had a full drawer example ["Quarter", 0.5]
-then make adjustments for swanky drawer

ideas:
-when returning start with highest dollar bill
if not, second highest
-as far as whole form, 
get cash - price, then do the whole change thing

*/