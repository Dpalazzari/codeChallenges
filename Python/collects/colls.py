# Should be called 'collections' but that is a taken buzzword in Python
from scrabble_board import Scrabble

class Colls:

  def __init__(self):
    self.states         = {"Oregon": "OR", "Alabama": "AL", "New Jersey": "NJ", "Colorado": "CO"}
    self.capitals       = {"OR": "Salem", "AL": "Montgomery", "NJ": "Trenton", "CO": "Denver"}
    self.scrabble_board = Scrabble().board

  def find_capital(self, state):
    if state in self.states.keys():
      capital   = self.capitals[self.states[state]]
    if state not in self.states.keys():
      capital = "Unknown"
    return capital