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
 */

function balanced(num) {
  let strNum = num.toString();
  let midDig;
  let leftNums;
  let rightNums;
  let leftTotal = 0;
  let rightTotal = 0;

  if (strNum.length % 2 === 0) {
    let leftDigit = strNum[strNum.length / 2 - 1];
    let rightDigit = strNum[strNum.length / 2];
    midDig = Number(`${leftDigit}${rightDigit}`);

    leftNums = strNum.slice(0, strNum.length / 2 - 1);
    rightNums = strNum.slice(strNum.length / 2 + 1);
  } else {
    let middle = Math.floor(strNum.length / 2);
    midDig = Number(strNum[middle]);

    leftNums = strNum.slice(0, middle);
    rightNums = strNum.slice(middle + 1);
  }
  for (let i = 0; i < leftNums.length; i++) {
    leftTotal += Number(leftNums[i]);
    rightTotal += Number(rightNums[i]);
  }
  return leftTotal === rightTotal ? 'Balanced' : 'Not Balanced';
}
console.log(balanced(195691));
