module.exports = function fibonacci(num){
  if(num <= 2){
    return [0, 1]
  } else if(num > 2){
    var fibArray = fibonacci( num - 1 )
    var negOne   = fibArray.pop()
    var negTwo   = fibArray.pop()
    var fibArray = fibonacci( num - 1 )
    fibArray.push( negTwo + negOne)
    return fibArray
  }
}
