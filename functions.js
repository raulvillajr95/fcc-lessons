function convertHTML(str) {
  let unc = str.split('');
  let final = [];

  for (let i = 0; i < unc.length; i++) {
    if ('&' == unc[i]) {
      final.push('&amp;')
    } else if ('<' == unc[i]) {
      final.push('&lt;')
    } else if ('>' == unc[i]) {
      final.push('&gt;')
    } else if ('"' == unc[i]) {
      final.push('&quot;')
    } else if ("'" == unc[i]) {
      final.push('&apos;')
    } else {
      final.push(unc[i])
    }
  }
  return final.join('')
}

console.log(convertHTML("Dolce & Gabbana"))

/*
ideas 
-run through argi
-if number is not in argi, add it
-
*/