/*! normalizeStuff.js v0.2.1 by ryanpcmcquen */
/*jslint browser:true, white:true*/
/*global window*/
(function () {

  "use strict";

  var normalizeStuff = {};

  normalizeStuff.heights = function (elementSelector, height) {
    var elementArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var maxElementHeight;
    if (!height) {
      // no height was defined, calculate tallest height
      var elementHeightArray = [];
      elementArray.map(function (i) {
        elementHeightArray.push(i.clientHeight);
      });

      // get the tallest height
      maxElementHeight = Math.max.apply(Math, elementHeightArray);
    } else {
      // specific height defined
      maxElementHeight = height;
    }
    // apply that height to all elements
    elementArray.map(function (i) {
      i.style.height = maxElementHeight + "px";
    });
  };

  normalizeStuff.widths = function (elementSelector, width) {
    var elementArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var maxElementWidth;
    if (!width) {
      // no width was defined, calculate greatest width
      var elementWidthArray = [];
      elementArray.map(function (i) {
        elementWidthArray.push(i.clientWidth);
      });

      // get the greatest width
      maxElementWidth = Math.max.apply(Math, elementWidthArray);
    } else {
      // specific width defined
      maxElementWidth = width;
    }
    // apply that width to all elements
    elementArray.map(function (i) {
      i.style.width = maxElementWidth + "px";
    });
  };

  // attach globally
  window.normalizeStuff = normalizeStuff;

}());
