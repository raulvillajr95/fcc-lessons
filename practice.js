const myPrivateVar = new WeakMap()
const myPrivateMethod = new WeakMap()

class MyNamespace {
  constructor() {
    myPrivateVar.set(this, 0)
    myPrivateMethod.set(this, foo => console.log(foo))
    this.myPublicVar = 'foo';
  }

  myPublicFunction(bar) {
    let privateVar = myPrivateVar.get(this);
    const privateMethod = myPrivateMethod.get(this)

    privateVar++
    myPrivateVar.set(this, privateVar)

    privateMethod(bar)
  }
}