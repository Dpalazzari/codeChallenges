function states(){
  return {"Oregon": "OR", "Alabama": "AL", "New Jersey": "NJ", "Colorado": "CO"}
}

function capitals(){
  return {"OR": "Salem", "AL": "Montgomery", "NJ": "Trenton", "CO": "Denver"}
}

function scrabbleBoard(){
  return {"A":1, "B":3, "C":3, "D":2,
          "E":1, "F":4, "G":2, "H":4,
          "I":1, "J":8, "K":5, "L":1,
          "M":3, "N":1, "O":1, "P":3,
          "Q":10, "R":1, "S":1, "T":1,
          "U":1, "V":4, "W":4, "X":8,
          "Y":4, "Z":10}
}

function findCapital(state){
  var stateHash   = states();
  var capitalHash = capitals();
  if (stateHash[state] === undefined ){
    return "Unknown";
  } else {
    return capitalHash[stateHash[state]]
  }
}

function findState(capital){
  var capitalHash = capitals();
  for(var key in capitalHash){
    if(capitalHash[key] === capital){
      var stateHash   = states();
      for(var state in stateHash){
        if(stateHash[state] === key){
          return state;
        }
      }
    }
  }
}

function scrabble(word){
  var word   = word.toUpperCase().split("");
  var scores = word.map((letter)=>{
    var library = scrabbleBoard();
    return library[letter];
  })
  return scores.reduce( (sum,num) => sum + num, 0);
}

module.exports = {
  findCapital: findCapital,
  findState: findState,
  scrabble: scrabble
}
