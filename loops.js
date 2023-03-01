/**
 *
 *
 *
 *
 *
 *
 *  every 10 challenges, checkout 'Largest prime factor'
 *  challenges myself to do all them in recursively
 */

// if looping, use recursion
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
console.log(feast('great blue hero', 'garlic naan'));
