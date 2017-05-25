const assert       = require('chai').assert;
const fibonacci    = require('../javascriptChallenges/fibonacci');

describe('Fibonacci', function(){
  it('returns the first two numbers of the fibonacci sequence', function(){
    result = fibonacci(2);
    assert.deepEqual(result, [0, 1]);
    assert.typeOf(result, 'array');
  })

  it('returns the first three numbers of the fibonacci sequence', function(){
    result = fibonacci(3);
    assert.deepEqual(result, [0, 1, 1]);
    assert.typeOf(result, 'array');
  })

  it('retruns the first four numbers of the sequence', function(){
    result = fibonacci(4);
    assert.deepEqual(result, [0, 1, 1, 2]);
    assert.typeOf(result, 'array');
  })

  it('returns the first fifteen numbers of the sequence', function(){
    result = fibonacci(15);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
    assert.typeOf(result, 'array');
  })

  it('returns the first sixteen numbers of the sequence', function(){
    result = fibonacci(16);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
    assert.typeOf(result, 'array');
  })


})
