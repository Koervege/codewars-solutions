const findOdd = require('./index');

test('it should return the correct value', () => {
  expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
  expect(findOdd([5,4,3,2,1,5,4,3,2,10,10])).toBe(1);
});
