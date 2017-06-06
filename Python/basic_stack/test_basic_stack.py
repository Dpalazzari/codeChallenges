import unittest

from basic_stack import BasicStack

class BasicStackTestCase(unittest.TestCase):

  def setUp(self):
    self.basic = BasicStack()

  def test_push_to_array(self):
    array  = [1,2,3,4]
    number = 5
    result = self.basic.push_to_array(array, number)
    self.assertEqual(result, [1,2,3,4,5])

unittest.main()