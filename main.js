/**
 *
 *
 *
 *
 *
 *
 *
 */

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor() {
    this.list = []
    size: () => {
      return this.list.length
    }
  }

  append(value) {
    let newNode = new Node(value)
    if (this.list[0]) {
      this.list[this.list.length - 1].nextNode = newNode 
    }
    this.list.push(newNode)
  }

  prepend(value) {
    if (this.list[0]) {
      this.list.unshift(new Node(value, this.list[0]))
    } else { 
      this.list.unshift(new Node(value))
    }
  }
}

let linker = new LinkedList()
linker.prepend(2)
linker.prepend(1)
linker.append(3)
console.log(linker.size)
