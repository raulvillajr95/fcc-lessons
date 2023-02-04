/**
 *
 *
 *
 *
 *
 *
 */

function XO(str) {
  let xCounter = 0;
  let oCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xCounter += 1;
    } else if (str[i].toLowerCase() === "o") {
      oCounter += 1;
    }
  }

  return xCounter === oCounter;
}

console.log(XO("ooxx"));
