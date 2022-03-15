const numWins = {
  'Buf': 11,
  'MIA': 9,
  'NE': 6,
  'NYJ': 1
};

const atLeast9Wins = _.flow([
  Object.entries,
  arr => arr.filter(([key, value]) => value >= 9),
  Object.fromEntries
]) (numWins);

atLeast9Wins;