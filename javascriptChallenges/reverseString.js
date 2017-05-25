function reverseString(string){
  const arr = string.split("")
  const finalArray = []
  while(arr.length > 0){
    finalArray.push(arr.pop())
  }
  return finalArray.join("")
}

module.exports = {
  reverseString: reverseString
}
