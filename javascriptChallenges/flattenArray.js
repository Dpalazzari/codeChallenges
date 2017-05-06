module.exports = function flattenArray(arr){
  var nestedArrays   = [].concat.apply([], arr)
  for(i = 0; i < nestedArrays.length; i++){
    if(nestedArrays[i].length){
      var nestedArrays = flattenArray(nestedArrays)
    }
  }
  return nestedArrays
}
