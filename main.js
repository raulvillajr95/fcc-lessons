/**
 *
 *
 *
 *
 *
 *
 *
 */
function multiples3or5(num, counter = 0) {
  if (num < 3) {
    return 0;
  } else {
    counter += 1;
    if ((num % 3 == 0 || num % 5 == 0) && counter > 1) {
      debugger;
      return num + multiples3or5(num - 1, counter);
    } else {
      return multiples3or5(num - 1, counter);
    }
  }
}

console.log(multiples3or5(1000));
