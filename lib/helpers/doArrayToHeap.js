/* -----------------------------------------------------------------|
 * helpers/Array to Heap                                            |
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * @author  : Prabhat Kumar [http://prabhatkumar.org/]              |
 * @license : Apache, version 2.0                                   |
 * _________________________________________________________________|
 */

/* Invoking strict mode. */
'use strict';

/*!
 * Salient Points:
 * ~~~~~~~~~~~~~~~
 * Node.js® - Require and Exports
 * The keyword require returns an object, which references the value of module.exports for a given file.
 */

var swap = require('./swap');

module.exports = function(arr) {
  var iParent = function(arr, index) {
    var childIndex = index;
    var parentIndex = Math.floor((childIndex - 1) / 2);
    if (parentIndex >= 0 && arr[childIndex] > arr[parentIndex]) {
      swap(arr, childIndex, parentIndex);
      // recursive call.
      iParent(arr, parentIndex);
    }
  };
  for (var i = 0; i < arr.length; i++) {
    iParent(arr, i);
  }
  return arr;
};
