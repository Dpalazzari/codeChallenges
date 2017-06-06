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

  def test_it_returns_super_fizz_when_divisible_by_7_and_3(self):
    num = 21
    result = self.sfb.sequence(num)
    self.assertEqual(result, "SuperFizz")

  def test_it_returns_fizz_buzz_when_divisible_by_3_and_5(self):
    num = 15
    result = self.sfb.sequence(num)
    self.assertEqual(result, "FizzBuzz")

  def test_it_returns_super_fizz_buzz_when_divisible_by_7_3_and_5(self):
    num = 105
    result = self.sfb.sequence(num)
    self.assertEqual(result, "SuperFizzBuzz")

  def test_it_returns_the_number_if_not_divisible_by_7_3_or_5(self):
    num = 4
    result = self.sfb.sequence(num)
    self.assertEqual(result, 4)

unittest.main()

  