# Should be called 'collections' but that is a taken buzzword in Python

class Colls:

  def __init__(self):
    self.states         = {"Oregon": "OR", "Alabama": "AL", "New Jersey": "NJ", "Colorado": "CO"}
    self.capitals       = {"OR": "Salem", "AL": "Montgomery", "NJ": "Trenton", "CO": "Denver"}
    self.scrabble_board = {"A":1, "B":3, "C":3, "D":2, "E":1, "F":4, "G":2, "H":4,
                          "I":1, "J":8, "K":5, "L":1, "M":3, "N":1, "O":1, "P":3,
                          "Q":10, "R":1, "S":1, "T":1, "U":1, "V":4, "W":4, "X":8,
                          "Y":4, "Z":10}

  def find_capital(self, state):
    if state in self.states.keys():
      capital   = self.capitals[self.states[state]]
    if state not in self.states.keys():
      capital = "Unknown"
    return capital