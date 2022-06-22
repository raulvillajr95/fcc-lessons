// 1
function total(arr) {
  let total = arr.reduce((a, b) => {
    return a + b;
  }, 0)
  return total
}
// console.log(total([1,2,3]))


// 2
function stringConcat(arr) {
  let together = arr.reduce((a,b) => {
    return a + b;
  }, "")
  return together
}
// console.log(stringConcat([10,2,3]))


// 3
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
function totalVotes(arr) {
  let total = 0;
  arr.reduce((a, b) => {
    if (b.voted == true) {
      return  total  += 1
    }
  }, 0)
  return total
}
// console.log(totalVotes(voters))


// 4
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
function shoppingSpree(arr) {
  let total = arr.reduce((a, b) => {
    return a += b.price
  }, 0)
  return total;
}
// console.log(shoppingSpree(wishlist))


// 5
var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];
function flatten(arr) {
  let allOfArr = arr.reduce((a, b) => {
    return a.concat(b)
  }, [])
  return allOfArr;
}
// console.log(flatten(arrays))


// 6 
function voterResults(arr) {
  let results = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
  arr.reduce((a, b) => {
    let age = b.age;
    let vote = b.voted;
    if (age > 17 && age < 26) {
      results.numYoungPeople += 1
      if (vote == true) {
        results.numYoungVotes += 1
      }
    } else if (age > 25 && age < 36) {
      results.numMidsPeople += 1
      if (vote == true) {
        results.numMidVotesPeople += 1
      }
    } else if (age > 35 && age < 56) {
      results.numOldsPeople += 1
      if (vote == true) {
        results.numOldVotesPeople += 1
      }
    }
  }, 0)

  return results;
}
console.log(voterResults(voters))