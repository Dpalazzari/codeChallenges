const assert       = require('chai').assert;
const findCapital  = require('../app').findCapital;
const findState    = require('../app').findState;

describe('Collections Challenge', function(){
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
