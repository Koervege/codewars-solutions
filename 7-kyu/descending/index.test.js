const descendingOrder = require('./index');

test('it should return the correct value', () => {
  expect(descendingOrder(1234)).toBe(4321);
  expect(descendingOrder(89898989)).toBe(99998888);
});
