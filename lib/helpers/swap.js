/* -----------------------------------------------------------------|
 * helpers/swap                                                     |
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * @author  : Prabhat Kumar [http://prabhatkumar.org/]              |
 * @license : Apache, version 2.0                                   |
 * _________________________________________________________________|
 */

/* Invoking strict mode. */
'use strict';

// Swap:
// The act of swapping two variables refers to mutually exchanging the values of the variables.
module.exports = function(Arraydata, i, j) {
  var temp = Arraydata[i];
      Arraydata[i] = Arraydata[j];
      Arraydata[j] = temp;
};

// Test Case: [Path: /test/helpers.js]
