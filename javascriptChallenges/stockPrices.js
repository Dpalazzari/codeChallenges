module.exports = stockPrices = arr => {
  var smallNum = Math.min.apply(null, arr)
  if (smallNum === arr[arr.length - 1]){
    var gains = arr.map((num, index) => {
      return arr[index + 1] - arr[index]
    })
    gains.pop()
    return Math.max.apply(null, gains)
  } else {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === smallNum){
        var gains = []
        while(i < arr.length){
          gains.push(arr[i])
          i++;
        }
        return Math.max.apply(null, gains) - smallNum
      }
    }
  }
}
