module.exports = {
  easyLine(n) {
    if(n===0) return 0;
    const binomials = [
      [1],
      [1,1],
      [1,2,1],
    ];
  
    function binomial(num1,num2) {
      while(num1 >= binomials.length) {
        let s = binomials.length;
        let nextRow = [];
        nextRow[0] = 1;
        for(let i=1, prev=s-1; i<s; i++) {
          nextRow[i] = binomials[prev][i-1] + binomials[prev][i];
        }
        nextRow[s] = 1;
        binomials.push(nextRow);
      }
      return binomials[num1][num2];
    }
    
    let result = 0;
    for(let i=0; i<n; i++) {
      result += binomial(n,i)**2;
    };
    
    return Math.round(Math.log(result));
 },

  easyLineContemporary(n) {
    function factorial(number) {
      let result = BigInt(1);
      for(let i=1; i<=number; i++){
        result*=BigInt(i);
      };
      return result;
    };

    function nChooseK(num1, num2) {
      return factorial(num1)/( factorial(num2) * factorial(num1-num2) );
    };
    
    let result = 1n;
    for(let i=0; i<n; i++) {
      result += nChooseK(n,i)**2n;
    };

    return parseInt(result);
  },
};
