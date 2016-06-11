'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */

module.exports = ( input, test, result ) => {
  var result = result || [];

  if(Array.isArray(input)) {
    for(var i = 0; i < input.length; i++) {
      module.exports(input[i], test, result);
    }
  } else if (typeof input === 'object') {
    for(var key in input) {
      module.exports(input[key], test, result);
    }
  } else if (typeof input === 'string') {
    if(test(input)) {
      result.push(input);
    }
  }
  return result;
};
