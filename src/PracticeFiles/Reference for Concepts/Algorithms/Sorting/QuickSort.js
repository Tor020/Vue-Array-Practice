// https://medium.com/@joebegley15/how-to-implement-quicksort-in-js-53eefeb0fd9f
let testarr = [24, 56, 193, 500, 232, 214, 112, 34, 5, 75];


const quickSortL2H = function(arr) {   // low to high
  if (arr.length <= 1) { /edgecase
    return arr;
  }

  const pointer = arr[0];  //the pointer is the 0th(1st) position within the array that is passed inside
  const less = [];         //less than the pointer
  const more = [];         //more than the pointer

  for (var i = 1; i < arr.length; i++){
    if (arr[i] < pointer){
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
  }
  return quickSortL2H(less).concat(pointer, quickSortL2H(more))  
}




const quickSortH2L = function(arr) {   // high to low
  if (arr.length <= 1) { 
    return arr;
  }

  const pointer = arr[0];
  const less = [];
  const more = [];

  for (var i = 1; i < arr.length; i++){
    if (arr[i] < pointer){
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
  }
  return quickSortH2L(more).concat(pointer, quickSortH2L(less))  
}




console.log(quickSortL2H(testarr)) 
console.log(quickSortH2L(testarr)) 