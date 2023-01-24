/**
 *
 *
 *
 */

function translate2d(dx, dy) {
  return function (x, y) {
    return [(dx += x), (dy += y)];
  };
}
const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
console.log(result);

function scale2d(sx, sy) {
  return function (x, y) {
    return [sx * x, sy * y];
  };
}
const doubleScale = scale2d(2, 2);
const result2 = doubleScale(6, -3);
console.log(result2);

function composeTransform(f, g) {
  return scale2d(translate2d(f, g));
}
const composeTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleScale
);
const result3 = composeTransformations(0, 1);
console.log(result3);
