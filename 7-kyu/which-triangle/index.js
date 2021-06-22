function typeOfTriangle(sideA, sideB, sideC) {
  
  const args = [sideA, sideB, sideC];
  let max = 0;
  let maxIndex;
  let checkSum = 0;
  
  for(let [index, element] of args.entries()) {
    if(typeof element !== 'number' || element === 0) {
      return "Not a valid triangle";
    };
    if(element > max){
      max = element;
      maxIndex = index;
    };
  };
  
  args.forEach( (element, index) => {
    if(index === maxIndex) return;
    checkSum += element; 
  });
  
  if(checkSum <= max) return "Not a valid triangle";
  
  if(sideA === sideB && sideB === sideC) return 'Equilateral';
  if(sideA !== sideB && sideA !== sideC && sideC !== sideB) return 'Scalene';
  return 'Isosceles';

};

module.exports = typeOfTriangle;