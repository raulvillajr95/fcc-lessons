


// console.log(body.children.length)

// for (const child of body.children) {
//   console.log(child)
// }

function byTagName(node, tagName) {
  let list = []
  function inByTagName(nada) {
    if (nada.children == 0) {
      return
    }
    for (const child of nada.children) {
      if (child.nodeName.toLowerCase() == tagName) {
        list.push(child.nodeName.toLowerCase())
      }
      inByTagName(child)
    }
  }
  inByTagName(node)
  return list
}
console.log(byTagName(document.body, "h1").length)
console.log(byTagName(document.body, "span").length)
console.log(byTagName(document.querySelector("p"), "span").length)

// for (const child of body.children) {
//   console.log(child.nodeName.toLowerCase())
//   console.log(child.children.length)
// }


function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return
  }
  t.children.forEach(child => {
    console.log(child.name)
    printChildrenRecursive(child)
  })
}

const tree = {
  name: 'body',
  children: [
    {
      name: 'h1',
      children: [
        {
          name: 'span',
          children: []
        }
      ]
    },
    {
      name: 'p',
      children: [
        {
          name: 'span',
          children: []
        },
        {
          name: 'span',
          children: []
        },
      ]
    }
  ]
}

// body
//   h1
//     span
//   p
//     span
//     span

/*
ideas:
-break down my current byTagName() function
  why in tf is it not returning???????????????????????????
*/