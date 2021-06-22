function squareDigits(num){
  return +num
    .toString()
    .split('')
    .map(e => (e ** 2).toString())
    .join('');
};

module.exports = squareDigits;
