// - [Slightly More Complex Dom Walker](https://gist.github.com/Tor020/dba961ce514cbd802b712b4bac55c79d)


// Minified Walker
;function walk(a,b){var c,d,e=0;do c||(c=b.call(a,e)===!1),!c&&(d=a.firstChild)?++e:(d=a.nextSibling)?c=0:(d=a.parentNode,--e,c=1),a=d;while(e>0)};

/*!
 * Small Walker - v0.1.1 - 5/5/2011
 * http://benalman.com/
 * 
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Walk the DOM, depth-first (HTML order). Inside the callback, `this` is the
// element, and the only argument passed is the current depth. If the callback
// returns false, its children will be skipped.
// 
// Based on https://gist.github.com/240274

function walk(node, callback) {
  var skip, tmp;
  // This depth value will be incremented as the depth increases and
  // decremented as the depth decreases. The depth of the initial node is 0.
  var depth = 0;

  // Always start with the initial element.
  do {
    if ( !skip ) {
      // Call the passed callback in the context of node, passing in the
      // current depth as the only argument. If the callback returns false,
      // don't process any of the current node's children.
      skip = callback.call(node, depth) === false;
    }

    if ( !skip && (tmp = node.firstChild) ) {
      // If not skipping, get the first child. If there is a first child,
      // increment the depth since traversing downwards.
      depth++;
    } else if ( tmp = node.nextSibling ) {
      // If skipping or there is no first child, get the next sibling. If
      // there is a next sibling, reset the skip flag.
      skip = false;
    } else {
      // Skipped or no first child and no next sibling, so traverse upwards,
      tmp = node.parentNode;
      // and decrement the depth.
      depth--;
      // Enable skipping, so that in the next loop iteration, the children of
      // the now-current node (parent node) aren't processed again.
      skip = true;
    }

    // Instead of setting node explicitly in each conditional block, use the
    // tmp var and set it here.
    node = tmp;

  // Stop if depth comes back to 0 (or goes below zero, in conditions where
  // the passed node has neither children nore next siblings).
  } while ( depth > 0 );
}

// Usage

// Replace any "o" with "ø" throughout the DOM, retaining any existing element
// structure and references (silly example).


walk(document.documentElement, function() {
  if ( this.nodeType == 3 ) {
    this.nodeValue = this.nodeValue.replace(/i/g, 'ø');
  }
});