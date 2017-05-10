require 'minitest/autorun'
require 'minitest/emoji'
require './lib/fibonacci'

class FibonacciTest < Minitest::Test

  def setup
    @fib = Fibonacci.new
  end

  def test_it_exists
    assert @fib
  end

  def test_it_retruns_the_first_two_numbers_of_fibonacci_sequence
    num = 2
    result = @fib.sequence(num)
    assert_equal [0, 1], result
  end

  def test_it_returns_the_first_three_numbers_of_fibonacci_sequence
    num = 3
    result = @fib.sequence(num)
    assert_equal [0, 1, 1], result
  end

  def test_it_returns_the_first_four_numbers_of_the_fibonacci_sequence
    num = 4
    result = @fib.sequence(num)
    assert_equal [0, 1, 1, 2], result
  end

  def test_it_returns_the_first_15_numbers_for_fibonacci_sequence
    num = 15
    result = @fib.sequence(num)
    assert_equal [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377], result
  end

end
