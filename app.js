const flattenArray = require('./javascriptChallenges/flattenArray');
const fizzBuzz     = require('./javascriptChallenges/fizzBuzz');
const findCapital  = require('./javascriptChallenges/collections').findCapital
const findState    = require('./javascriptChallenges/collections').findState
const scrabble     = require('./javascriptChallenges/collections').scrabble
const fibonacci    = require('./javascriptChallenges/fibonacci');
const removeElement = require('./javascriptChallenges/basicStack').removeElement;
const countElement = require('./javascriptChallenges/basicStack').countElement;
const pushElement  = require('./javascriptChallenges/basicStack').pushElement;
const maxElement   = require('./javascriptChallenges/basicStack').maxElement;
const stockPrices  = require('./javascriptChallenges/stockPrices');

function sayHello(){
  return "Hello, there Cutie pie! One of us is in deep trouble."
}

function addNumbers(num1, num2){
  return num1 + num2;
}

module.exports = {
  sayHello: sayHello,
  addNumbers: addNumbers,
  fizzBuzz: fizzBuzz,
  flatten: flattenArray,
  findCapital: findCapital,
  findState: findState,
  scrabble: scrabble,
  fibonacci: fibonacci,
  removeElement: removeElement,
  countElement: countElement,
  pushElement: pushElement,
  maxElement: maxElement,
  stockPrices: stockPrices
}
