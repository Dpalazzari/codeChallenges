const assert = require('chai').assert;
const bubbleSort = require('../javascriptChallenges/bubbleSort').bubble;

describe("JavaScript bubbleSort algorithm", function(){
  context('a jumbled array', function(){
    it('is sorted in a bubblesort algorithm fashion', function(){
      const array = [5, 8, 1, 6, 14, 2, 0]
      const expected = [0, 1, 2, 5, 6, 8, 14]
      const result = bubbleSort(array)
      assert.equal(result, expected)
    })
  })
})