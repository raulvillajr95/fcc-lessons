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

byTagName(body)

const tree = {
  name: 'body',
  children: [
    {
      name: 'h1',
      children: [
        {}
      ]
    }
    {}
  ]
}

/*
ideas:
-create manual body tree
*/