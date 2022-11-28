class Bottles {
  song() {
    return `99 bottles of beer on the wall, 99 bottles of beer.
    Take one down and pass it around, 98 bottles of beer on the wall.
    
    98 bottles of beer on the wall, 98 bottles of beer.
    Take one down and pass it around, 97 bottles of beer on the wall.
    
    97 bottles of beer on the wall, 97 bottles of beer.
    Take one down and pass it around, 96 bottles of beer on the wall.
    
    96 bottles of beer on the wall, 96 bottles of beer.
    Take one down and pass it around, 95 bottles of beer on the wall.
    
    95 bottles of beer on the wall, 95 bottles of beer.
    Take one down and pass it around, 94 bottles of beer on the wall.`;
  }
}

let song = new Bottles();

console.log(song.song())

let expected = `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.

96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.

95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.`;


console.log(song.song() == expected)
console.log(song.song().length)
console.log(expected.length)

console.log("hhh\n\nhhh")