const overTheRoad = require('./index');

test('should return correct value', () => {
  expect(overTheRoad(1,3)).toBe(6);
  expect(overTheRoad(7,11)).toBe(16);
  expect(overTheRoad(23633656673,310027696726)).toBe(596421736780);
  expect(overTheRoad(20,1000000)).toBe(1999981);
});

