const assert       = require('chai').assert;
const findCapital  = require('../app').findCapital;
const findState    = require('../app').findState;
const Scrabble     = require('../app').scrabble;

describe('Collections Challenge', function(){
  context('State and Capital tests', function(){
    it('Finds a states capital', function(){
      var state  = 'Colorado';
      var result = findCapital(state);
      assert.equal(result, 'Denver')
    })

    it('returns unknown if the state is not in the hash', function(){
      var state  = 'Minnesota';
      var result = findCapital(state);
      assert.equal(result, 'Unknown')
    })

    it('retruns the state when given the capital',function(){
      var capital = "Denver";
      var result = findState(capital);
      assert.equal(result, 'Colorado')
    })
  })

  context('Scrabble', function(){
    it('Returns the score of one letter', function(){
      var letter = 'H';
      var result = Scrabble(letter)
      assert.equal(result, 4)
    })

    it('returns the score for an entire word', function(){
      var word = "Hello";
      var result = Scrabble(word);
      assert.equal(result, 8)
    })
  })

})
