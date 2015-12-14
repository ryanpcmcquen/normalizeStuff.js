/* normalizeHeights.js v0.1.0 by ryanpcmcquen */
/*jslint browser:true, white:true*/
/*global window*/

(function() {
  'use strict';
  var normalizeHeights = function(elementSelector, height) {
    var elementArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector)),
      maxElementHeight;
    if (!height) {
      // no height was defined, calculate tallest height
      var elementHeightArray = [];
      elementArray.map(function(i) {
        elementHeightArray.push(i.clientHeight);
      });

      // get the tallest height
      maxElementHeight = Math.max.apply(Math, elementHeightArray);
    } else {
      // specific height defined
      maxElementHeight = height;
    }
    // apply that height to all elements
    elementArray.map(function(i) {
      i.style.height = maxElementHeight + "px";
    });
  }
  // attach globally
  window.normalizeHeights = normalizeHeights;
}());
