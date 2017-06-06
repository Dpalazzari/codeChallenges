import unittest
from super_fizz_buzz import SuperFizzBuzz

class SuperFizzBuzzTest(unittest.TestCase):

  def setUp(self):
    self.sfb = SuperFizzBuzz()

  def test_it_returns_super_when_divisible_by_7(self):
    num = 7
    result = self.sfb.sequence(num)
    self.assertEqual(result, 'Super')

  def test_it_returns_fizz_when_divisible_by_3(self):
    num = 3
    result = self.sfb.sequence(num)
    self.assertEqual(result, 'Fizz')

  def test_it_returns_buzz_when_divisible_by_5(self):
    num = 5
    result = self.sfb.sequence(num)
    self.assertEqual(result, 'Buzz')
unittest.main()

  