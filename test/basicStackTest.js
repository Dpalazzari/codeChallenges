const assert        = require('chai').assert;
const removeElement = require('../app').removeElement;
const countElement  = require('../app').countElement;
const pushElement   = require('../app').pushElement;
const maxElement    = require('../app').maxElement;

describe('Basic Stack Challenges', function(){
  context('Pop element out of array', function(){
    it('pops the last element out of an array without using pop', function(){
      arr    = [1,2,3,4]
      result = removeElement(arr)
      assert.equal(result, 4)
    })
  })

  context('Length of Array', function(){
    it('returns the length of an array without using .length', function(){
      arr    = [1,2,3,4]
      result = countElement(arr)
      assert.equal(result, 4)
    })
  })

  context('Push element into an array', function(){
    it('pushes an element into an array without using push', function(){
      arr    = [1,2,3]
      num    = 4
      result = pushElement(arr, num)
      assert.deepEqual(result, [1,2,3,4])
    })
  })

  context('Max element of an array', function(){
    it('returns the max element from an array without using .max', function(){
      arr    = [1, 2, 5, 10, 7, 9]
      result = maxElement(arr)
      assert.equal(result, 10)
    })
  })
})
