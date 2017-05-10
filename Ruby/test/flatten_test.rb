require 'minitest/autorun'
require 'minitest/emoji'
require './lib/flatten.rb'

class FlattenTest < Minitest::Test

  def setup
    @flatten = Flatten.new
  end

  def test_it_exists
    assert @flatten
  end

  def test_it_flattens_and_array_within_an_array
    array  = [2, [1,2]]
    result = @flatten.condense_array(array)
    assert_equal [2, 1, 2], result
  end

  def test_it_continues_to_flatten_nested_arrays
    array  = [2, [1,2,[3,4]]]
    result = @flatten.condense_array(array)
    assert_equal [2, 1, 2, 3, 4], result
  end

  def test_it_flattens_an_insanely_nested_array
    array  = [2, [1,2,[3,[4, 5]]], [1, [3,4]]]
    result = @flatten.condense_array(array)
    assert_equal [2, 1, 2, 3, 4, 5, 1, 3, 4], result
  end

end
