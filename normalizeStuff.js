/*! normalizeStuff.js v0.3.0 by ryanpcmcquen */
/*jslint browser:true*/
/*global window*/
(function () {

    "use strict";

    var normalizeStuff = {};

    normalizeStuff.heights = function (elementSelector, height) {
        var elementArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
        var maxElementHeight;
        if (!height) {
            // No height was defined, calculate tallest height.
            var elementHeightArray = elementArray.map(function (i) {
                return i.clientHeight;
            });

            // Get the tallest height.
            maxElementHeight = Math.max.apply(Math, elementHeightArray);
        } else {
            // Specific height defined.
            maxElementHeight = height;
        }
        // Apply that height to all elements.
        elementArray.forEach(function (i) {
            i.style.height = maxElementHeight + "px";
        });
    };

    normalizeStuff.widths = function (elementSelector, width) {
        var elementArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
        var maxElementWidth;
        if (!width) {
            // No width was defined, calculate greatest width.
            var elementWidthArray = elementArray.map(function (i) {
                return i.clientWidth;
            });

            // Get the greatest width.
            maxElementWidth = Math.max.apply(Math, elementWidthArray);
        } else {
            // Specific width defined.
            maxElementWidth = width;
        }
        // Apply that width to all elements.
        elementArray.forEach(function (i) {
            i.style.width = maxElementWidth + "px";
        });
    };

    // Attach globally.
    window.normalizeStuff = normalizeStuff;

}());
