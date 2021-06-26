function duplicateCount(text){
  let repeatedChars = {};
  
  for(char of text.toLowerCase()) {
    if(repeatedChars[char]) {
      repeatedChars[char]++
    } else {
      repeatedChars[char] = 1;
    };
  };
  
  return Object.keys(repeatedChars).filter( e => repeatedChars[e] > 1 ).length;
};

module.exports = duplicateCount;
