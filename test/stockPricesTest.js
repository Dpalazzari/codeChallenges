const assert      = require('chai').assert;
const stockPrices = require('../javascriptChallenges/stockPrices');


describe('Stock Prices challenge', function(){
  context('Returns the greatest profit', function(){
    it('returns the positive profit', function(){
      var arr = [10, 7, 5, 8, 11, 9]
      var result = stockPrices(arr)
      assert.equal(result, 6)
    })
  })

  context('Returns the smallest loss', function(){
    it('returns the negative loss', function(){
      var arr = [15, 13, 9, 7, 6, 4]
      var result = stockPrices(arr)
      assert.equal(result, -1)
    })
  })
})
