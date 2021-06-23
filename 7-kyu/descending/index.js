function descendingOrder(n) {
  return +n.toString().split('').sort( (a,b) => a > b ? -1 : 1).join('');
};

module.exports = descendingOrder;
