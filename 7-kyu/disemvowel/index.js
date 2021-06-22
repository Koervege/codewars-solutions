function disemvowel(str) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  return str
    .split('')
    .filter( element => {
      return !vowels.some( member => element === member)
    }).join('');
};

module.exports = disemvowel;
