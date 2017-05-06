const assert    = require('chai').assert;
const fizzBuzz  = require('../app').fizzBuzz;

describe('fizzBuzz challenge',function(){
  it('returns Fizz if divisible by 3', function(){
    var result = fizzBuzz(6);
    assert.equal(result, 'Fizz')
    assert.typeOf(result, 'string')
  })

  it('returns Buzz if divisible by 5', function(){
    var result = fizzBuzz(10);
    assert.equal(result, 'Buzz')
    assert.typeOf(result, 'string')
  })

  it('returns Super if divisible by 7', function(){
    var result = fizzBuzz(14);
    assert.equal(result, 'Super')
    assert.typeOf(result, 'string')
  })

  it('returns FizzBuzz if divisible by 3 and 5', function(){
    var result = fizzBuzz(15);
    assert.equal(result, 'FizzBuzz')
    assert.typeOf(result, 'string')
  })

  it('returns SuperBuzz if divisible by 5 and 7', function(){
    var result = fizzBuzz(35);
    assert.equal(result, 'SuperBuzz')
    assert.typeOf(result, 'string')
  })

  it('returns SuperFizz if divisible by 3 and 7', function(){
    var result = fizzBuzz(21);
    assert.equal(result, 'SuperFizz')
    assert.typeOf(result, 'string')
  })

  it('returns SuperFizzBuzz if divisible by 3, 5, and 7', function(){
    var result = fizzBuzz(105);
    assert.equal(result, 'SuperFizzBuzz')
    assert.typeOf(result, 'string')
  })

  it('returns only the number if not divisibile by 3, 5, or 7', function(){
    var result = fizzBuzz(1);
    assert.equal(result, 1)
    assert.typeOf(result, 'number')
  })
})
