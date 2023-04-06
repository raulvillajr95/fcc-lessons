/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 */

function bumps(str) {
  let ns = str.match(/n/gi);
  return ns.length < 15 ? 'Woohoo!' : 'Car Dead';
}
console.log(bumps('__nn_nnnn__n_n___n____nn__nnn'));
ABC li LI