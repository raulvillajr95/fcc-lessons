/**
 *
 *
 *
 *
 *
 *
 */

class BankAccount {
  constructor() {
    this.balance = null
    this.isOpen = false
    this.setBalance = false
  }

  open() {
    if (this.isOpen === true) {
      throw new ValueError
    }
    this.setBalance = true
    this.balance = 0
    this.setBalance = false
    this.isOpen = true
  }

  close() {
    if (this.isOpen === false) {
      throw new ValueError
    }
    this.isOpen = false
    this.setBalance = true
    this.balance = null
    this.setBalance = false
  }

  deposit(value) {
    if (this.isOpen === false) {
      throw new ValueError
    }
    if (value < 0) {
      throw new ValueError
    }
    this.setBalance = true
    this.balance += value
    this.setBalance = false
  }

  withdraw(value) {
    if (this.isOpen === false) {
      throw new ValueError
    }
    if (value > this.balance) {
      throw new ValueError
    }
    if (value < 0) {
      throw new ValueError
    }

    this.setBalance = true
    this.balance -= value
    this.setBalance = false
  }
  
  get balance() {
    console.log('get')
    if (this.isOpen === false) {
      throw new ValueError
    }
    return this.balance
  }
  
  set balance(value) {
    console.log('set')
    if (this.setBalance === false) {
      throw new Error 
    } else {
      console.log(value)
      this.balance = value
    } 
  }
}

class ValueError extends Error{
  constructor() {
    super('Bank account error')
  }
}

const account = new BankAccount()
account.open()
console.log(account.balance)
