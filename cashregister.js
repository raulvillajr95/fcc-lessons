function checkCashRegister(price, cash, cid) {
  // Solidified constants
  let change = cash - price;
  let drawer = cid
  let amounts = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.10, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}

  // Calculate total in drawer
  let totalPlacement = 0;
  for (let i = 0; i < cid.length; i++) {
    totalPlacement += cid[i][1];
  }
  let total = Math.round((totalPlacement + Number.EPSILON) * 100) / 100;

  // Insufficient funds(needs work)
  if (total < change) {
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }
  /*
  Calculate exact change(ideas)
  -loop through and minus it??
  -check if divisible, then minus??
  -
  */

  // Closed (done)
  if (total == change) {
    return {status: 'CLOSED', change: cid}
  }

  // Open (needs work)
  /*
  Calculate exact change if I had everything
  -first just list of numbers
  -then sorted in highest to lowest
  -then numbers with names
  */

  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


/*

real thing:
-scan items-done
-show you total of all purchases-done
-customer hands over an amount of money-done
-calculate change-done
-open register to get change-done
-change gets redistributed
if perfect change, you're good-done
if to low, can't go through-done
add up all drawer money to make sure it's more than change-done
if more cash than price, get change
make sure it's divisible?? so that there's exact change,(if change is $1 but I only have a $5 bill then I can't)
-hand over change

to-do:
-break down change into amounts

ideas:
-when returning start with highest dollar bill
if not, second highest
-as far as whole form, 
get cash - price, then do the whole change thing
-i could split it on the decimal

*/