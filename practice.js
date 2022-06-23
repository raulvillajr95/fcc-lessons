const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

function findTheOldest(arra) {
  function sortNum(arr) {
    let len = arr.length;
    let emp = []
    let highest = 0
    for (let j = 0; j < len; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
          highest = arr[i]
        }
      }
      emp.unshift(highest)
      let index = arr.indexOf(highest)
      if (index > -1) {
        arr.splice(index, 1)
      }
      highest = 0
    }
    return emp
  }
  let ages = []
  
  // add 'if' for objects with no yearOfDeath
  arra.reduce((a, b) => {
    if (b.yearOfDeath == undefined) {
      const yearNow = new Date().getFullYear();
      b["yearOfDeath"] = yearNow
      ages.push(b.yearOfDeath - b.yearOfBirth)
    } else {
      ages.push(b.yearOfDeath - b.yearOfBirth);
    }
  }, 0)
  console.log(ages)

  let agesSorted = sortNum(ages)
  let oldestNum = agesSorted[agesSorted.length - 1];
  let oldest;
  for (let i = 0; i < agesSorted.length; i++) {
    arra.reduce((a, b) => {
      if (oldestNum == b.yearOfDeath - b.yearOfBirth) {
        oldest = b;
      }
    }, 0)
  }
  return oldest
}
console.log(findTheOldest(people).name)