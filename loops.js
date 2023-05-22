/**
 *
 *
 *
 *
 *
 *
 */


function parse(str) {
  let ac = ""
  let newStr = str.replace(/[-\s_]+/g, ' ')
  let splat = newStr.split(' ')

  for(let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "-" && str[i] != "_") {
      newStr += str[i]
    }
  }

  for(let i = 0; i < splat.length; i++) {
    ac += splat[i][0].toUpperCase()
  }

  return ac
}
console.log(parse('Portable Network Graphics'))
console.log(parse('Ruby on Rails'))
console.log(parse('First In, First Out'))
console.log(parse('GNU Image Manipulation Program'))
console.log(parse('Complementary metal-oxide semiconductor'))
console.log(parse('Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me'))
console.log(parse('Something - I made up from thin air'))
console.log(parse('The Road _Not_ Taken'))
