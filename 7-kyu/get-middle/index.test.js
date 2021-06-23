const getMiddle = require('./index');

test('it should return the correct value', () => {
  expect(getMiddle('testing')).toBe('t');
  expect(getMiddle('middle')).toBe('dd');
});
