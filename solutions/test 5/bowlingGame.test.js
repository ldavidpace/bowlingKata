
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

test('testOneSpare', () => {
  rollSpare()
  g.roll(3);
  rollMany(17,0);
  expect(g.score()).toBe(16);
});

test('testOneStrike', () => {
  rollStrike();
  g.roll(3);
  g.roll(4);
  rollMany(16, 0);
  expect(g.score()).toBe(24);
});

test('testPerfectGame', () => {
  rollMany(12, 10);
  expect(g.score()).toBe(300);
});

const rollStrike = () => {
  g.roll(10);
}
const rollSpare = () => {
  g.roll(5);
  g.roll(5);
}