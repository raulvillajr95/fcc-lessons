function convertToRoman(num) {
  let list = [];
  let tou = parseInt(num.toString()[num.toString().length-4]);
  let hun = parseInt(num.toString()[num.toString().length-3]);
  let tns = parseInt(num.toString()[num.toString().length-2]);
  let ons = num % 10;
  if (tou == 1) {
    list.push('M');
  } else if (tou == 2) {
    list.push('MM')
  } else if (tou == 3) {
    list.push('MMM')
  }
  if (hun == 9) {
    list.push('CM');
  } else if (hun == 8) {
    list.push('DCCC');
  } else if (hun == 7) {
    list.push('DCC');
  } else if (hun == 6) {
    list.push('DC');
  } else if (hun == 5) {
    list.push('D');
  } else if (hun == 4) {
    list.push('CD');
  } else if (hun == 3) {
    list.push('CCC');
  } else if (hun == 2) {
    list.push('CC');
  } else if (hun == 1) {
    list.push('C');
  } 
  if (tns == 9) {
    list.push('XC');
  } else if (tns == 8) {
    list.push('LXXX');
  } else if (tns == 7) {
    list.push('LXX');
  } else if (tns == 6) {
    list.push('LX');
  } else if (tns == 5) {
    list.push('L');
  } else if (tns == 4) {
    list.push('XL');
  } else if (tns == 3) {
    list.push('XXX');
  } else if (tns == 2) {
    list.push('XX');
  } else if (tns == 1) {
    list.push('X');
  }
  if (ons == 9) {
    list.push('IX');
  } else if (ons == 8) {
    list.push('VIII');
  } else if (ons == 7) {
    list.push('VII');
  } else if (ons == 6) {
    list.push('VI');
  } else if (ons == 5) {
    list.push('V');
  } else if (ons == 4) {
    list.push('IV');
  } else if (ons == 3) {
    list.push('III');
  } else if (ons == 2) {
    list.push('II');
  } else if (ons == 1) {
    list.push('I')
  }
  let final = list.join('');
  return final
}

console.log(convertToRoman(3999));