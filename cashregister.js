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
  let total = (Math.round(((totalPlacement + Number.EPSILON) * 100) / 100) * 100);

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
  let trackChange = Number(change)
  let trackList = []
  for (let i = 1; i < 5; i++) {
    console.log(i)
    if (trackChange > 100) {
      trackChange -= 100
      trackList.push(100)
    } else if (trackChange > 20) {
      trackChange -= 20
      trackList.push(20)
    } else if (trackChange > 10) {
      trackChange -= 10
      trackList.push(10)
    } else if (trackChange > 5) {
      trackChange -= 5
      trackList.push(5)
    } else if (trackChange > 1) {
      trackChange -= 1
      trackList.push(1)
    } else if (trackChange > 0.25) {
      trackChange -= 0.25
      trackList.push(0.25)
    } else if (trackChange > 0.1) {
      trackChange -= 0.1
      trackList.push(0.1)
    } else if (trackChange > 0.05) {
      trackChange -= 0.05
      trackList.push(0.05)
    } else if (trackChange > 0.01) {
      trackChange -= 0.01
      trackList.push(0.01)
    } else {
      return 'something went wrong'
    }
  }

  return;
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
-change numbers to no decimals, js be acting weird with floats
so $10.00 will now be 1000
-later on convert them back

ideas:
-when returning start with highest dollar bill
if not, second highest
-as far as whole form, 
get cash - price, then do the whole change thing
-i could split it on the decimal

*/