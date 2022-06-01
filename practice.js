const body = document.querySelector('body')


// console.log(body.children.length)

// for (const child of body.children) {
//   console.log(child)
// }

function byTagName(node) {
  if (node.children.length === 0) {
    return
  }
  for (const child of body.children) {
    console.log(child)
    byTagName(child)
  }
}
// byTagName(body)


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
-create manual body tree
*/