/* __________________________________________________________________
 * Settings for Bubble Sort System.                                 |
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * Bubble sort, sometimes referred to as sinking sort,              |
 * is a simple sorting algorithm that repeatedly steps              |
 * through the list to be sorted, compares each pair of             |
 * adjacent items and swaps them if they are in the wrong order.    |
 * The pass through the list is repeated until no swaps are needed, |
 * which indicates that the list is sorted.                         |
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * @author  : Prabhat Kumar [http://prabhatkumar.org/]              |
 * @license : Apache, version 2.0                                   |
 * _________________________________________________________________|
 */


// ----------------------
// Bubble Sort Algorithm.
// Complexity: O(N^2).

/*!
 * Salient Points:
 * ~~~~~~~~~~~~~~~
 * Node.js® - Require and Exports
 * The keyword require returns an object, which references the value of module.exports for a given file.
 */

var swap = require('./helpers/swap');

/*!
 * @public
 * @module lib/bubblesort
 * @param {Array} input array.
 * @return {Array} Sorted array.
 */
module.exports = function(Arraydata) {
  var count = Arraydata.length;
  for (var i = count - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (Arraydata[j] > Arraydata[i]) {
        swap(Arraydata, i, j);
      }
    }
  }
  return Arraydata;
};
