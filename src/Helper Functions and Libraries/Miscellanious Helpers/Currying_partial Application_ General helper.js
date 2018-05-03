//Self Invoking anonymous function call for event listern shortcut
(function(){
  var element = function(id){
    return document.getElementById(id);
  }
  //Get Elements 
  var status = element('status');
  var messages = element('messages');
})();

// events and args should be of type Array
function addMultipleListeners(element,events,handler,useCapture,args){
  if (!(events instanceof Array)){
    throw 'addMultipleListeners: '+
          'please supply an array of eventstrings '+
          '(like ["click","mouseover"])';
  }
  //create a wrapper to be able to use additional arguments
  var handlerFn = function(e){
    handler.apply(this, args && args instanceof Array ? args : []);
  }
  for (var i=0;i<events.length;i+=1){
    element.addEventListener(events[i],handlerFn,useCapture);
  }
}

function handler(e) {
  // do things
};

// usage
addMultipleListeners(
    document.getElementById('first'),
    ['touchstart','click'],
    handler,
    false);


  let c = (a) => {
    return console.log(a);
  }
  // 
    function add(a, b) {
      return a + b;
    }
    function sub(a, b) {
      return a - b;
    }
    function mult(a, b) {
      return a * b;
    }
    function idF(x){
      return function(){
      return x;
      }
    }
    let check = idF(3)
    const addf = function (a){
      return function(b){
        return a + b;
      }
    }


    liftf = function(fnPassed){
      return function(a){
        return function(b){
          return fnPassed(a, b);
        };
      };
    }
  //c(liftf(add)(3)(4))


function curry (fnPassed, a){ 
  return function(b){
    return fnPassed(a, b);
  };
}

// seems broken
// function curry2 (passedFn, a){  
//   return liftf(passedFn)(first);
// }

let chkPlus = curry(add, 5) //this function adds 5 to things
let chkSub = curry(sub, 5)  //this function subtracts 5 from things
let chkMult = curry(mult, 5) //this function multiplies things by 5
// console.log((chkMult(chkPlus(3)))) //three + 5 * 5 = 40

//three ways to write a function that adds 1 
let inc = addf(1);
let inc2 = liftf(add) (1);
let inc3 = curry(add, 1);

// This function takes a function that takes two arguments and then it needs to be called again, where it will perform the function with the 2nd argument passed twice
function twice(passedBinaryFn){
  return function(a){
    return passedBinaryFn(a, a);
  };
}
//Example 1
  // console.log( twice(add) (24) )
//Example 2
let dbl = twice(add) 
console.log(dbl(3))
//Example 3
let square = twice(mult)
console.log(square(3));

//Takes whatever order the functions would've normalled been called in with a standard liftf, but instead reverses the order they're called in.
// Crockford said that this is practical because it can be used as a wrapper for times when you need to change the order of an outcome, example: two different APIs that don't normally work together, instead of manually rewriting a function for it, this automates it..dunno how
function reverse(fnPassed){
  return function(first, second){
    return fnPassed(second, first);
  };
}
function reverse2(func){
  return function (...args) {
    return func(...args.reverse());
  };
}

// takes a function that tkaes two unary functions and returns the result of calling them both on the same argument  - can chain these or just use spread
function composeUnary(fnPassed1, fnPassed2){
  return function(number){
    return fnPassed2(fnPassed1(number)); //fn2 needs to be passed before fn1
  };
}
let carrot = composeUnary(dbl, square)
// console.log(carrot(5));

//function that takes two binary functions and returns a function that calls them both
  function composeBinary(binaryFn1, binaryFn2){
    return function(one,two,three){
      return binaryFn1(binaryFn2(one, two) , three)
      
    }
  }
let hybird = composeBinary(add,mult)
composeBinary(add, mult)


// generator that will produce a series of values.
function from(start){
  return function() {
    var next = start;
    start += 1;
    return next;
  }
}
