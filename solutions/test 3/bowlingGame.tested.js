
const Game = require('./bowlingGame.js');
let g;

beforeEach(() => {
  g = new Game();
});


const rollMany = (n, pins) => {
  for (var i = 0; i < n; i++) {
    g.roll(pins);
  }
}

test('testGutterGame', () => {
  rollMany(20, 0);
  expect(g.score()).toBe(0);
});


test('testAllOnes', () => {
  rollMany(20, 1);
  expect(g.score()).toBe(20);
});

test('testOnSpare()', () => {
  rollSpare() // spare
  g.roll(3);
  rollMany(17,0);
  expect(g.score()).toBe(16);
});

const rollSpare = () => {
  g.roll(5);
  g.roll(5);
}