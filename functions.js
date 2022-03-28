function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  function obPer(avgA) {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgA, 3)/GM))
  }

  let list = []
  for (let i = 0; i < arr.length; i++) {
    list.push({name: arr[i].name, orbitalPeriod: obPer(arr[i].avgAlt)})
  }
  return list
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));