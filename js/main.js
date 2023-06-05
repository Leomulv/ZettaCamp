
function result(input) {
    const sortedArray = input.sort((a, b) => a - b);
    
    const length = sortedArray.length;
    
    if (length % 2 === 1) {
      const middleIndex = Math.floor(length / 2);
      return sortedArray[middleIndex];
    } else {
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      return (sortedArray[middleIndex1] + sortedArray[middleIndex2]) / 2;
    }
  }
  
  const input = [8, 7, 7, 9, 5, 4, 2, 9];
  console.log(result(input));