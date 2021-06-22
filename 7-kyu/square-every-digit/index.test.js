const squareDigits = require('./index');

test('it should return the correct value', () => {
  expect(squareDigits(3212)).toBe(9414);
  expect(squareDigits(2112)).toBe(4114);
});