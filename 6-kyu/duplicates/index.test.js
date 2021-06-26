const duplicateCount = require('./index');

test('it should return the correct value', () => {
  expect(duplicateCount('Indivisibility')).toBe(1);
  expect(duplicateCount("Indivisibilities")).toBe(2);
});
