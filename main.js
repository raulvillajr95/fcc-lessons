/**
 *
 *
 *
 */

// function translate2d(dx, dy) {
//   return function (x, y) {
//     return [(dx += x), (dy += y)];
//   };
// }
// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);

// function scale2d(sx, sy) {
//   return function (x, y) {
//     return [sx * x, sy * y];
//   };
// }
// const doubleScale = scale2d(2, 2);
// const result2 = doubleScale(6, -3);

// function composeTransform(f, g) {
//   return function (x, y) {
//     let midResult = f(x, y);
//     return g(midResult[0], midResult[1]);
//   };
// }
// const composeTransformations = composeTransform(
//   moveCoordinatesRight2Px,
//   doubleScale
// );
// const result3 = composeTransformations(0, 1);

function translate2d(dx, dy) {
  return function (nx, ny) {
    dx += nx;
    dy += ny;
    return [dx, dy];
  };
}
// let longName = translate2d(-6, 10);
// const result = longName(4, 8); // [6, 8]
// console.log(result);

function scale2d(sx, sy) {
  return function (nx, ny) {
    sx *= nx;
    sy *= ny;
    return [sx, sy];
  };
}
// const scaleName = scale2d(3, 3);
// const result2 = scaleName(6, -3);
// console.log(result2);

function composeTransform(f, g) {
  return function (nx, ny) {
    let [newx, newy] = f(nx, ny);
    return g(newx, newy);
  };
}
// const composed = composeTransform(longName, scaleName);
// console.log(composed(0, 0));

const memTrasformed = memoizeTransform(translate2d(2, 2));
console.log(memTrasformed(2, 2), "first");
console.log(memTrasformed(2, 2), "second");
