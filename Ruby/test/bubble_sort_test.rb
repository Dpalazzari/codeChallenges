require 'minitest/autorun'
require 'minitest/emoji'
require './lib/bubble_sort'

class BubbleSortTest < Minitest::Test
  def setup
    @bubble = Bubble.new
  end

  def test_it_exits
    assert @bubble
  end

  def test_it_bubble_sorts_an_array
    array = [5, 8, 1, 6, 14, 2, 0]
    result = @bubble.sort(array)
    assert_equal [0, 1, 2, 5, 6, 8, 14], result
  end
end