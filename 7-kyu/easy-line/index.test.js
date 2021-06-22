const { easyLine, easyLineContemporary } = require('./index');

test('should return correct value', () => {
  expect(easyLine(7)).toBe(8);
  expect(easyLine(13)).toBe(16);
  expect(easyLine(17)).toBe(22);
  expect(easyLine(19)).toBe(24);

  expect(easyLineContemporary(0)).toBe(1);
  expect(easyLineContemporary(1)).toBe(2);
  expect(easyLineContemporary(4)).toBe(70);
  expect(easyLineContemporary(50)).toBe(100891344545564193334812497256);
});