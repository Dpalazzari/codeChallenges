require 'minitest/autorun'
require 'minitest/emoji'
require './lib/basic_stack'

class BasicStackTest < Minitest::Test

  def setup
    @basic = BasicStack.new
  end

  def test_it_exists
    assert @basic
  end

  def test_it_can_push_to_an_array_without_using_push
    array  = [1,2,3]
    number = 4
    result = @basic.add_to_end(array, number)
    assert_equal [1,2,3,4], result
  end

  def test_it_can_pop_an_element_from_an_array_without_using_pop
    array  = [1,2,3,4]
    result = @basic.remove_top_element(array)
    assert_equal [[1,2,3], 4], result
    assert_equal [1,2,3], result[0]
    assert_equal 4, result[1]
  end

  def test_it_continues_to_pop_elements_out_of_array
    array  = [1,2,3,4]
    result = @basic.remove_top_element(array)
    assert_equal [[1,2,3], 4], result
    assert_equal [1,2,3], result[0]
    assert_equal 4, result[1]
    result = @basic.remove_top_element(result[0])
    assert_equal [[1,2], 3], result
  end

  def test_it_can_count_how_many_elements_are_in_the_stack_without_using_count
    array  = [1,2,3,4,5,6]
    result = @basic.count_num_elements(array)
    assert_equal 6, result
  end

  def test_it_can_find_the_largest_value_in_the_stack_without_using_max
    array  = [1, 2, 10, 4, 8, 2]
    result = @basic.find_max(array)
    assert_equal 10, result
  end

end
