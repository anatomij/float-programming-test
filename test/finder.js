'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FINDER: exports finder method', t => {
    t.ok( fpt.finder, 'has finder export' );
    t.equal( typeof fpt.finder, 'function', 'finder is a function' );
    t.end();
} );

test( 'DEEPFINDER: if no strings found returns empty array', t => {
  const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
    foo: 'aardvark'
  }, 'allegory' ];
  const result = fpt.finder( input, value => /^z/i.test( value ) );

  t.ok( result, 'generated a result' );
  t.deepEqual( result, [], 'result is correct' );
  t.end();
} );

test( 'FINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'FINDER: finds strings that start with b', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^b/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'baby' ], 'result is correct' );
    t.end();
} );
