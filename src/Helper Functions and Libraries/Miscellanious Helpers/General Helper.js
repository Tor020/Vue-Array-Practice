export const a = (val) => {
  document.write(val);
  return console.log(val);
};
export const b = (...val) => {
  return console.log(val);
};


// Function to cut 3 items out of an array and push it to another array until there is no more than 3 inside
function spliceCheck(array) {
let arrContainer = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length > 3) {
      arrContainer.push(array.splice(0, 3))
    }
  }
  return arrContainer;
}

// Helper Function to expedite object Assign rewrites
const setStylesOnElement = function(styles, element){
  Object.assign(element.style, styles);
}
// Helper Function to check if a number is even
function isEven(n) {
  return n % 2 == 0;
}
// Helper Function to check if a number is odd
function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

function qS (selector){
  return function(identifier){
    return document.querySelector(`${selector}${identifier}`);
  }
}

function qSArrow(selector) {
  return (identifier) => {
    return document.querySelector(`${selector}${identifier}`);
  }
}
