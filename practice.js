function isEmpty(obj) {
  let lst = []
  for (const key in obj) {
    if (key) {
      lst.push(key)
    }
  }
  return lst.length == 0
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (const key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2
    }
  }
  return obj
}

console.log(multiplyNumeric(menu))