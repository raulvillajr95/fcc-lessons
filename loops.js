/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 *
 * 3 = 180
 * 4 = 360
 *
 *
 */

function checkCoupon(code1, code2, date1, date2) {
  let dateOne = new Date(date1);
  let dateOneMil = dateOne.valueOf();
  let dateTwo = new Date(date2);
  let dateTwoMil = dateTwo.valueOf();
  return dateOneMil <= dateTwoMil && code1 === code2;
}
console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'));
