const typeOfTriangle = require('./index');

test('should return correct value', () => {
  expect(typeOfTriangle('.',5,82)).toBe("Not a valid triangle");
  expect(typeOfTriangle(2,2,1)).toBe("Isosceles");
  expect(typeOfTriangle(75,5,82)).toBe("Not a valid triangle");
});