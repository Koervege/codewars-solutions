const disemvowel = require('./index');

test('it should return the correct value', () => {
  expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  expect(disemvowel("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
});