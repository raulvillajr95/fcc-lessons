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
    this.size = this.list.length
    this.head = this.list[0]
    this.tail = this.list[this.list.length - 1]
  }

  append(value) {
    let newNode = new Node(value)
    if (this.list[0]) {
      this.list[this.list.length - 1].nextNode = newNode 
    }
    this.list.push(newNode)

    this.size = this.list.length
    this.head = this.list[0]
    this.tail = this.list[this.list.length - 1]
  }

  prepend(value) {
    if (this.list[0]) {
      this.list.unshift(new Node(value, this.list[0]))
    } else { 
      this.list.unshift(new Node(value))
    }

    this.size = this.list.length
    this.head = this.list[0]
    this.tail = this.list[this.list.length - 1]
  }

  at(index) {
    return this.list[index] 
  }

  pop() {
    this.list.pop()

    this.list[this.list.length - 1].nextNode = null
    
    this.size = this.list.length
    this.head = this.list[0]
    this.tail = this.list[this.list.length - 1]
  }

  contains(value) {
    let arr = []
    for (let i = 0; i < this.list.length; i++) {
      arr.push(this.list[i].value)
    }
    return arr.includes(value)
  }

  find(value) {
    for(let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) {
        return i
      }
    }
    return null
  }

  toString() {
    let str = ''
    for(let i = 0; i < this.list.length; i++) {
      str += `( ${this.list[i].value} ) -> `
    }
    str += 'null'
    return str
  }

  insertAt(value, index) {
    let before = this.list[index-1];
    let next = this.list[index];
    let inserting = new Node(value, next)

    if (index <= 0) {
      this.prepend(value)
      return
    } else if (index >= this.list.length) {
      this.append(value)
      return
    }

    before.nextNode = inserting
    inserting.nextNode = next

    this.list = this.list.slice(0,index)
      .concat(inserting)
      .concat(this.list.slice(index))
  }

  removeAt(index) {
    let before = this.list[index-1];
    let removing = this.list[index];
    let next = this.list[index + 1];

    if (index <= 0) {
      this.list.shift()
      this.size = this.list.length
      return
    } else if (index >= this.list.length - 1) {
      this.pop()
      return
    }

    before.nextNode = next
    this.list = this.list.slice(0,index)
      .concat(this.list.slice(index + 1))
    this.size = this.list.length
  }
}

let linker = new LinkedList()
linker.prepend(2)
linker.prepend(1)
linker.append(3)
linker.append(5)
linker.removeAt(30)
console.log(linker.list)
console.log(linker.size)
console.log(linker.head)
console.log(linker.tail)
