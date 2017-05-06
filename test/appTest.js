const assert    = require('chai').assert;
const sayHello  = require('../app').sayHello;
const addNums   = require('../app').addNumbers;
const fizzBuzz  = require('../app').fizzBuzz;
const flatten   = require('../app').flatten;


describe('App', function(){
  context('Initially learning unit testing', function(){
    it('app should return hello', function(){
      var result = sayHello();
      assert.equal(result, 'Hello, there Cutie pie! One of us is in deep trouble.');
    })

    it('app should return a string', function(){
      var result = sayHello();
      assert.typeOf(result, 'string');
    })

    it('addNumbers should add two values', function(){
      var result = addNums(5,5);
      assert.equal(result, 10)
    })

    it('addNumbers is greater than 5', function(){
      var result = addNums(2,4)
      assert.isAbove(result, 5)
      assert.equal(result, 6)
    })

    it('addNumbers returns a number', function(){
      var result = addNums(5,5);
      assert.typeOf(result, 'number')
    })
  })

  context('fizzBuzz', function(){
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

  context('flatten', function(){
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

    it('flattens an insanely complex array', function(){
      var array = [2, [1, 3, [4, 5]], 6, [7, [8, [9, 10]]]]
      var result = flatten(array)
      assert.deepEqual(result, [2, 1, 3, 4, 5, 6, 7, 8, 9, 10])
      assert.typeOf(result, 'array')
    })
  })
});
