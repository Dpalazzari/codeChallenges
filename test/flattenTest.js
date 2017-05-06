const assert    = require('chai').assert;
const flatten   = require('../app').flatten;

describe('Flatten challenge', function(){
  it('flattens a simple nested array', function(){
    var array = [2, [1, 3]]
    var result = flatten(array)
    assert.deepEqual(result, [2, 1, 3])
    assert.typeOf(result, 'array')
  })

  it('flattens a more complex array', function(){
    var array = [2, [1, 3, [4, 5]]]
    var result = flatten(array)
    assert.deepEqual(result, [2, 1, 3, 4, 5])
    assert.typeOf(result, 'array')
  })

  it('flattens a very complex array', function(){
    var array = [2, [1, 3, [4, 5]], 6, [7, [8, [9, 10]]]]
    var result = flatten(array)
    assert.deepEqual(result, [2, 1, 3, 4, 5, 6, 7, 8, 9, 10])
    assert.typeOf(result, 'array')
  })
})
