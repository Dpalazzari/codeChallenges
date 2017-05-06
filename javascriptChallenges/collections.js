function states(){
  return {"Oregon": "OR", "Alabama": "AL", "New Jersey": "NJ", "Colorado": "CO"}
}

function capitals(){
  return {"OR": "Salem", "AL": "Montgomery", "NJ": "Trenton", "CO": "Denver"}
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

module.exports = {
  findCapital: findCapital,
  findState: findState
}
