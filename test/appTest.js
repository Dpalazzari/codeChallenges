const assert   = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNums  = require('../app').addNumbers;

describe('App', function(){
  it('app should return hello', function(){
    var result = sayHello();
    assert.equal(result, 'Hello');
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
});
