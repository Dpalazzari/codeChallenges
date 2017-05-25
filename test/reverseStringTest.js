const assert        = require('chai').assert;
const reverseString = require('../javascriptChallenges/reverseString').reverseString;

describe('Reverse String Challenge', function(){
  it('returns the reverse of the input string', function(){
    const string = 'babooshka ninny'
    const result = reverseString(string)
    assert.equal(result, 'ynnin akhsoobab') 
  })
})
