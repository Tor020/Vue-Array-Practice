let c = (arg) => {
  console.log(arg)
}


//Convert number to reversed array of digits
function digitize(n) {
  n = n.toString().split('').reverse()
  n = n.map((i) => {
   return parseInt(i)
  });
  return n;
}
digitize(35231)

//remove all white space from a string, uses regex
function noSpace(x) {
  x = x.replace(/\s/g, '');
  return x;
}

// Return the opposite of a number given
function opposite(number) {
  return number = -number;
}


// Take a true false boolean and return a string 
function boolToWord(bool) {
  // c(bool)  // returns true in boolean form
  // c(typeof (bool)) //RETURNS BOOLEAN
  // bool.toString()
 
  if ( bool.toString() === "true"){
    return "Yes";
  }
  if ( bool.toString() === "false"){
    return "No";
  }  
}
/* I might be fucking retarded idk.. */
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

boolToWord(true);
boolToWord(false);

// Takes the operation and 2 values and performs it on the values
function basicOp(operation, value1, value2){
  if (operation === "*"){
    return value1 * value2;
    }
  if (operation === "+"){
    return value1 + value2;
  }
  if (operation === "-"){
    return value1 - value2;
  }
  if (operation === "/"){
    return value1 / value2;
  }
}

c(basicOp('*',4,3));
c(basicOp('-',4,3));

// Prevents an array of numbers from individually occurring more than n times within the array.
function deleteNth(arr,n){
  let results = [];
  let counterObj = {};
  for (let i = 0; i < arr.length; i++){
   let currentArrayValue = arr[i];
   let count = counterObj[currentArrayValue] || 0;

    if (count < n){
      results.push(currentArrayValue);
      counterObj[currentArrayValue] = count + 1;
    }
  }
  return results
}

c(deleteNth([1,1,3,3,7,2,2,2,2], 2));
c(deleteNth([1,1,3,3,7,2,5,4,3,3,3,2,1,2,2,2], 3));