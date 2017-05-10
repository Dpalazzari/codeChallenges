function removeElement(arr){
  return arr[countElement(arr) - 1]
}

function countElement(arr){
  var count = arr.map( num => {
    return 1
  })
  return count.reduce( (sum,num) => sum + num, 0);
}

function pushElement(arr, num){
  var arr = [arr, num]
  return [].concat.apply([], arr)
}

function maxElement(arr){
  var maxNum = 0
  for(var i = 0; i < countElement(arr); i++){
    if(arr[i] >= maxNum){ var maxNum = arr[i] }
  }
  return maxNum
}

module.exports = {
  removeElement: removeElement,
  pushElement: pushElement,
  countElement: countElement,
  maxElement: maxElement
}
