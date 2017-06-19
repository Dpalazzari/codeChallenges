import unittest
from bubble_sort import Bubble

class BubbleSortTestCase(unittest.TestCase):

  def setUp(self):
    self.bubble = Bubble()

  def test_it_sorts_a_short_list(self):
    arr = [5, 8, 1, 6, 14, 2, 0]
    result = self.bubble.sort(arr)
    self.assertEqual(result, [0, 1, 2, 5, 6, 8, 14])

suite = unittest.TestLoader().loadTestsFromTestCase(BubbleSortTestCase)
unittest.TextTestRunner(verbosity=2).run(suite)