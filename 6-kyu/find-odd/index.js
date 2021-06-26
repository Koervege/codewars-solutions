function findOdd(arr) {
  
  let memoryObject = {};

  arr.forEach( e => {
    if(!memoryObject[e]){
      memoryObject[e] = 1
      return;
    };
    memoryObject[e]++
  });
  
  for(let property in memoryObject) {
    if(memoryObject[property]%2 === 1) return +property;
  };
};

module.exports = findOdd;
