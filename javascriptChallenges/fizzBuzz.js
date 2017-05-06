module.exports = function fizzBuzz(number){
  var superFizzBuzz = "";
  if ( number % 7 === 0 ){
    var superFizzBuzz = superFizzBuzz + 'Super'
  }
  if ( number % 3 === 0 ){
    var superFizzBuzz = superFizzBuzz + 'Fizz'
  }
  if ( number % 5 === 0 ){
    var superFizzBuzz = superFizzBuzz + 'Buzz'
  }
  if ( number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0){
    return number
  } else {
    return superFizzBuzz
  }
}
