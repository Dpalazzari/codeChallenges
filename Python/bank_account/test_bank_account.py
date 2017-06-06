import unittest

from bank_account import BankAccount
from bank_account import MinimumBalanceAccount


class AccountBalanceTestCase(unittest.TestCase):
  
  def setUp(self):
    self.bank_account = BankAccount()

  def test_balance(self):
    result = self.bank_account.balance
    self.assertEqual(result, 3000, msg="Account Balance Invalid")

  def test_deposit(self):
    result = self.bank_account.deposit(4000)
    self.assertEqual(result, 7000, msg="Deposit method inaccurate")

  def test_withdraw(self):
    result = self.bank_account.withdraw(2000)
    self.assertEqual(result, 1000, msg='Withdraw method broken.')

  def test_invalid_transaction(self):
    result = self.bank_account.withdraw(4000)
    self.assertEqual(result, "Invalid Transaction", msg='Should not be able to withdraw more than the Balance.')
    self.assertEqual(self.bank_account.balance, 3000, msg='If withdraw is greate than the balance, the balance should remain unaffected.')

  def test_subclass(self):
    self.assertTrue(issubclass(MinimumBalanceAccount, BankAccount), msg="Not a true subclass.")


unittest.main()