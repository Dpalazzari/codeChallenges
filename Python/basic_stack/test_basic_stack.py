import unittest

from basic_stack import BasicStack

class BasicStackTestCase(unittest.TestCase):

  def setUp(self):
    self.basic = BasicStack()

  def test_push_to_array_without_append(self):
    array  = [1,2,3,4]
    number = 5
    result = self.basic.push_to_array(array, number)
    self.assertEqual(result, [1,2,3,4,5])

  def test_push_to_array_with_append(self):
    array  = [1,2,3,4]
    number = 5
    result = self.basic.push_to_array_with_append(array, number)
    self.assertEqual(result, [1,2,3,4,5])

  def test_it_can_pop_last_element_from_array(self):
    array = [1,2,3,4,5]
    result = self.basic.remove_last_element(array)
    self.assertEqual(result, [1,2,3,4])

  def test_it_can_pop_last_element_from_array(self):
    array = [1,2,3,4,5]
    result = self.basic.remove_last_element_with_pop(array)
    self.assertEqual(result, [1,2,3,4])

  def test_it_can_count_the_number_of_objects_in_a_list(self):
    array = [1,2,3,4,5]
    result = self.basic.count_elements_in_list(array)
    self.assertEqual(result, 5)

  def test_it_can_count_the_elements_in_an_array_with_typical_python(self):
    array = [1,2,3,4,5]
    result = self.basic.count_elements_in_list_with_len(array)
    self.assertEqual(result, 5)

unittest.main()