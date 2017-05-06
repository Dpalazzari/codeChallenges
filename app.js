function sayHello(){
  return "Hello, there Cutie pie! One of us is in deep trouble."
}

function addNumbers(num1, num2){
  return num1 + num2;
}

function fizzBuzz(number){
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

function flattenArray(arr){
  var flattenedArray = [].concat.apply([], arr);
  return [].concat.apply([], flattenedArray)
}


module.exports = {
  sayHello: sayHello,
  addNumbers: addNumbers,
  fizzBuzz: fizzBuzz,
  flatten: flattenArray
}
