function largestOfFour(arr) {
  // You can do this!
  
  return arr.map(function(group){
    return group.reduce(function(prev,current){
      return (current > prev) ? current: prev;
    });

  });
  
  
  //return arr;
}
