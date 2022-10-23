class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  count() {
    return this.observerList.length;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  indexOf(obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify(context) {
    const observerCount = this.observers.count();
    for(let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

class Observer {
  constructor() {}
  update() {

  }
}

class ConcreteSubject extends Subject {
  constructor(element) {

    super();
    this.element = element;

    this.element.onclick = () => {
      this.notify(this.element.checked);
    };
  }
}

class ConcreteObserver extends Observer {
  constructor(element) {
    super();
    this.element = element;
  }

  update(value) {
    this.element.checked = value;
  }
}

const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new ConcreteSubject(
  document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
  
  const check = document.createElement('input');
  check.type = 'checkbox';
  const checkObserver = new ConcreteObserver(check);

  controlCheckbox.addObserver(checkObserver);

  container.appendChild(check);
}

addBtn.onclick = addNewObserver;