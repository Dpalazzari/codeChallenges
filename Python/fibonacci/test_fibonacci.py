import unittest
from fibonacci import Fibonacci

class FibonacciTestCase(unittest.TestCase):

  def setUp(self):
    self.fibonacci = Fibonacci()

  def test_it_returns_the_first_two_numbers_of_the_fibonacci_sequence(self):
    num = 2
    result = self.fibonacci.sequence(num)
    self.assertEqual(result, [0,1])

unittest.main()