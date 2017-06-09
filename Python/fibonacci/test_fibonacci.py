import unittest
from fibonacci import Fibonacci

class FibonacciTestCase(unittest.TestCase):

  def setUp(self):
    self.fibonacci = Fibonacci()

  def test_it_returns_the_first_two_numbers_of_the_fibonacci_sequence(self):
    num = 2
    result = self.fibonacci.sequence(num)
    self.assertEqual(result, [0,1])

  def test_it_returns_the_first_three_numbers_of_the_fibonacci_sequence(self):
    num = 3
    result = self.fibonacci.sequence(num)
    self.assertEqual(result, [0,1,1])

  def test_it_returns_the_first_four_numbers_of_the_fibonacci_sequence(self):
    num = 4
    result = self.fibonacci.sequence(num)
    self.assertEqual(result, [0,1,1,2])

  def test_it_returns_the_first_fifteen_numbers_of_the_fib_sequence(self):
    num = 15
    result = self.fibonacci.sequence(num)
    self.assertEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])

unittest.main()