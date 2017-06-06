class BankAccount(object):

  def __init__(self, balance = 3000):
    self.balance = balance

  def deposit(self, amount):
    self.balance += amount
    return self.balance

  def withdraw(self, amount):
    if amount <= self.balance:
      self.balance -= amount
      return self.balance
    elif amount > self.balance:
      return "Invalid Transaction"

class MinimumBalanceAccount(BankAccount):
  def __init__(self, minimum = 1000):
    self.minimum = minimum