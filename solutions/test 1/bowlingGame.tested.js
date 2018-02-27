const Game = require('./bowlingGame.js');

test('testGutterGame', () => {
  const g = new Game();
  for (var i = 0; i < 20; i++) {
    g.roll(0);
  }
  expect(g.score()).toBe(0);
});