'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {


  var parStack = [];
  var parCount = false;
  var left = false;
  var right = false;

  if (input === '') {
    return false;
  }

  for (var i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      left = true;
      parStack.push(input[i]);
    } else if (input[i] === ')') {
      right = true;
      if (parStack.pop() !== '(') {
        return false;
      }
    }
  };
  if (left && right) {
    return !parStack.length;
  } else {
    return false;
  }

};
