function nextFibNum(arr){
  return arr[arr.length - 2] + arr[arr.length - 1]
}

module.exports = function fibonacci(num){
  if(num <= 2){
    return [0, 1]
  } else if(num > 2){
    var fibArray = fibonacci(num - 1)
    var nextFib  = nextFibNum(fibArray)
    fibArray.push(nextFib)
    return fibArray
  }
}
