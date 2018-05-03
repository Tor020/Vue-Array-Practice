//a binary function (also called bivariate function, or function of two variables) is a function that takes two inputs.


//the parameters that are passed in with the first function are available to all functions that are used with the function inside of a higher order function. they are available inherently and that is why something like this works with nothing besides paramters being passed in
//   return function(first) {
//     return function(second) {
//       return binary(first, second);
//     };
//   };
// }
// liftf(2, 3);



function log(arg) {
  console.log(arg);
}

// function identity(x){
//   return x;
// }

// log(identity(3)); // returns 3

// function funky (o) {
//   o = null;
// }
// var x = [];
// funky(x);
// log(x);  //returns []

// function swap (a, b){
//   var temp = a;
//   a = b;
//   b = temp;
// }

// var x = 1, y = 2;
// swap(x, y);
// log(x); // returns 1 --> nothing was returned or changed?

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}

// SETUP
// write a function identityf that takes an argument and returns a function that returns that argument

// var three = identityf(3);
// three() // 3

function identityf(x) {
  // the function is set equal to two,
  // then when called
  // it returns the original argument that was passed in with the declaration
  return function() { 
    return x;
  };
}
var two = identityf(2);
two();

// SETUP
// Write a function addf that adds from two invocations

// addf (3)(4) //7

function addf(first) {
  // addf takes the first argument and returns a function that takes the second argument
  // the interior function did work with the first function receiving the argument
  // and then returns the result of adding the first and second argument
  return function(second) {
    return first + second;
  };
}

// SETUP
// Write a function liftf that takes a binary function, and makes it callable with two invocations.

// var addf =  liftf(add);
// addf(3)(4)           // 7
// liftf(mul)(5)(6)     // 30

function liftf(binary) {
  // higher order functions are functions that take other functions as parameters and return other paramters as a results
  // liftf takes a binary function
  // that returns a function that returns first argument
  // that returns a function that takes the second argument
  // that returns the result of passing the first and second argument's to the binary function
  return function(first) {
    return function(second) {
      return binary(first, second);
    };
  };
}
liftf(2, 3);

// SETUP
// write a function curry that takes a binary function and an argument and returns a function that can take a second argument
// vard add3 = curry(add, 3);
// add(3)                      // 7 
// curry(mul, 5 )(6)          // 30

function curry(binary, first){ 
// takes a binary function and a first argument,
// and returns a function that takes a second argument.
// returns the result of calling the binary function with the first and second argument
  return function(second){
    return binary(first, second);
  };  
} 
// ALTERNATIVE WRITE METHOD
// function curry(binary, first) {
//   return liftf(binary) (first);
// }

function curry (func, ...first) {
  return function (...second) { //take the rest of the arguments put them in that array (the variable with ... infront ) and bind that array to that parameter
    return funct(...first, ...second);
  };
}

//SETUP 
// Without writing any new functions, show three ways to creat the inc function
// var inc = ___ ;
// inc(5)      // 6
// inc(inc(5)) // 7

// 1. inc = addf(1);
// 2. inc = liftf(add)(1);
// 3. inc = curry(add, 1);


/* END FRONT END MASTERS */

/*___________________________________________________*/

// FROM https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea

// pipe(...fns: [...Function]) => x => y
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};

const g = n => n + 1;
const f = n => n * 2;

// const doStuffBetter = x => f(g(x));
// doStuffBetter(20); // 42

const doStuff = x => {
  const afterG = g(x);
  trace('after g')(afterG);
  const afterF = f(afterG);
  trace('after f')(afterF);
  return afterF;
};

const doStuffBetter = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

doStuffBetter(20); // =>
/*
"after g: 21"
"after f: 42"
*/

/*___________________________________________________*/



// FROM https://www.sitepoint.com/higher-order-functions-javascript/
/*___________________________________________________*/

//1
var snakify = function(text) {
  return text.replace(/millenials/ig, "Snake People");
};
console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.

//2
var hippify = function(text) {
  return text.replace(/baby boomers/ig, "Aging Hippies");
};
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.

/*___________________________________________________*/

      /************ VS ***********/

/*___________________________________________________*/

//1
var attitude = function(original, replacement, source) {
  return function(source) {
    return source.replace(original, replacement);
  };
};

//2
var snakify = attitude(/millenials/ig, "Snake People");
var hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.

/*___________________________________________________*/


// First Call  it takes an that is used in the returned function
// Second Call it takes the content that it will use the returned funciton
function modifyText (ele ) {
return  (content) => {
   ele.textContent =  `${content}`
  }
}



