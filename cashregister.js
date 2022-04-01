function checkCashRegister(price, cash, cid) {
  // Solidified constants
  let change = parseFloat(cash - price).toFixed(2)*100;
  let amounts = {"PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000}//might delete
  let hundreds = Math.round(parseFloat(cid[8][1]).toFixed(2)*100)
  let twenties = Math.round(parseFloat(cid[7][1]).toFixed(2)*100)
  let tens = Math.round(parseFloat(cid[6][1]).toFixed(2)*100)
  let fives = Math.round(parseFloat(cid[5][1]).toFixed(2)*100)
  let ones = Math.round(parseFloat(cid[4][1]).toFixed(2)*100)
  let quarters = Math.round(parseFloat(cid[3][1]).toFixed(2)*100)
  let dimes = Math.round(parseFloat(cid[2][1]).toFixed(2)*100)
  let nickels = Math.round(parseFloat(cid[1][1]).toFixed(2)*100)
  let pennies = Math.round(parseFloat(cid[0][1]).toFixed(2)*100)
  let drawer = [hundreds, twenties, tens, fives, ones, quarters, dimes, nickels, pennies]

  // Calculate total in drawer
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += parseFloat(cid[i][1]).toFixed(2)*100;
  }

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
  for (let i = 1; i > 0 ; i++) {
    if (trackChange >= 10000 && hundreds >= 10000) {
      trackChange -= 10000
      trackList.push(10000)
      hundreds -= 10000
    } else if (trackChange >= 2000 && twenties >= 2000) {
      trackChange -= 2000
      trackList.push(2000)
      twenties -= 2000
    } else if (trackChange >= 1000 && tens >= 1000) {
      trackChange -= 1000
      trackList.push(1000)
      tens -= 1000
    } else if (trackChange >= 500 && fives >= 500) {
      trackChange -= 500
      trackList.push(500)
      fives -= 500
    } else if (trackChange >= 100 && ones >= 100) {
      trackChange -= 100
      trackList.push(100)
      ones -= 100
    } else if (trackChange >= 25 && quarters >= 25) {
      trackChange -= 25
      trackList.push(25)
      quarters -= 25
    } else if (trackChange >= 10 && dimes >= 10) {
      trackChange -= 10
      trackList.push(10)
      dimes -= 10
    } else if (trackChange >= 5 && nickels >= 5) {
      trackChange -= 5
      trackList.push(5)
      nickels -= 5
    } else if (trackChange >= 1 && pennies >= 1) {
      trackChange -= 1
      trackList.push(1)
      pennies -= 1
    } else if (trackChange !== 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      break
    }
  }
  //Naming
  let named = [["PENNY",0],["NICKEL",0],["DIME",0],["QUARTER",0],["ONE",0],["FIVE",0],["TEN",0],["TWENTY",0],["ONE HUNDRED",0]]
  for (let i = 0; i < trackList.length; i++) {
    if (trackList[i] == 1) {
      named[0][1] += 1
    } else if (trackList[i] == 5) {
      named[1][1] += 5
    } else if (trackList[i] == 10) {
      named[2][1] += 10
    } else if (trackList[i] == 25) {
      named[3][1] += 25
    } else if (trackList[i] == 100) {
      named[4][1] += 100
    } else if (trackList[i] == 500) {
      named[5][1] += 500
    } else if (trackList[i] == 1000) {
      named[6][1] += 1000
    } else if (trackList[i] == 2000) {
      named[7][1] += 2000
    } else if (trackList[i] == 10000) {
      named[8][1] += 10000
    }
  }
  //Conversion
  let final = []
  for (let i = 0; i < named.length; i++) {
    if (named[i][1] > 0) {
      final.push([named[i][0], named[i][1]/100])
    }
  }
  
  return {status: "OPEN", change: final.reverse()}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


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
-i got the giving change down
now, name them
  loop over trackList, if number equals certain amount, name it(ex: if number == 25 ["QUARTER", 0.25])
and keep track of them
  maybe start with how much of each I got
  take away from the section(ex: if I need a 0.25 then takeaway from the 25 section)
  make exceptions(if there's no more 0.25, then take from the 10 section and 5 section, etc.) maybe have if statements within if statements??
  keep track of everything
  instead of nested if statements, just add an AND(&&) to the 'if' to make sure that there's that coin in the drawer
-at the end, convert full intergers to dollar amounts(1000 should be 10.00)

ideas:
-when returning start with highest dollar bill
if not, second highest
-as far as whole form, 
get cash - price, then do the whole change thing
-i could split it on the decimal

*/