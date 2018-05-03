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

let tree = qSArrow('#')('element')
let classsss = qSArrow('.')('element')
console.log(classsss);
console.log(tree);

