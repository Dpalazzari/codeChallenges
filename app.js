function sayHello(){
  return "Hello, there Cutie pie! One of us is in deep trouble."
}

function addNumbers(num1, num2){
  return num1 + num2;
}

function fizzBuzz(number){
  if( number % 3 === 0 ){
    return 'Fizz'
  } else if ( number % 5 === 0 ){
    return 'Buzz'
  } else if ( number % 7 === 0 ){
    return 'Super'
  }
}


module.exports = {
  sayHello: sayHello,
  addNumbers: addNumbers,
  fizzBuzz: fizzBuzz
}
