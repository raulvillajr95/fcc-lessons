const user = {
  name: "Dom",
  age: 32,
  occupation: "Web Developer"
};

//console.log(Object.entries(user))




function whatIsInAName(collection, source) {
  let arr = [];
  let final = [];
  // Only change code below this line
  let ks = Object.keys(source)
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < ks.length; j++) {
      if(collection[i].hasOwnProperty(ks[j]) && collection[i][ks[j]] == source[ks[j]]) {
        arr.push(true);
        
      }
      if (arr.length == ks.length) {
        final.push(collection[i])
      }
    }
    arr = [];
  }

  // Only change code above this line
  return final;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
//console.log(...party)
/*
ideas 
-using filter()
-return source value == source key
-similar to the old reduce() lesson??
*/