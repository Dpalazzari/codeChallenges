# Should be called 'collections' but that is a taken buzzword in Python
from IPython import embed
from scrabble_board import Scrabble

class Colls:

  def __init__(self):
    self.states         = {"Oregon": "OR", "Alabama": "AL", "New Jersey": "NJ", "Colorado": "CO"}
    self.capitals       = {"OR": "Salem", "AL": "Montgomery", "NJ": "Trenton", "CO": "Denver"}
    self.scrabble_board = Scrabble().board

  def find_capital(self, state):
    if state in self.states.keys():
      capital = self.capitals[self.states[state]]
    if state not in self.states.keys():
      capital = "Unknown"
    return capital

  def find_state(self, capital):
    for group in self.capitals.items():
      if group[1] == capital:
        state_abr = group[0]
    return self.find_state_from_abbreviation(state_abr)

  def find_state_from_abbreviation(self, state_abr):
    for group in self.states.items():
      if group[1] == state_abr:
        return group[0]