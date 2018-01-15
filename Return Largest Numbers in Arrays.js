
function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(subArray){
    return subArray.reduce(function(prev,current){
      return current > prev ? current : prev;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
