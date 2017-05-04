require 'pry-state'
require 'minitest/autorun'
require 'minitest/emoji'
require './lib/super_fizz_buzz.rb'

class SuperFizzBuzzTest < Minitest::Test
  def setup
    @sfb = SuperFizzBuzz.new
  end

  def test_it_exists
    assert @sfb
  end

  def test_it_returns_Fizz_if_divisible_by_3
    result = @sfb.divide(3)
    assert_equal "Fizz", result
  end

  def test_it_returns_Buzz_if_divisible_by_5
    result = @sfb.divide(5)
    assert_equal "Buzz", result
  end

  def test_it_returns_Super_if_divisible_by_7
    result = @sfb.divide(7)
    assert_equal "Super", result
  end

  def test_it_returns_SuperFizz_if_divisible_by_3_and_7
    result = @sfb.divide(21)
    assert_equal "SuperFizz", result
  end

  def test_it_returns_SuperBuzz_if_divisible_by_5_and_7
    result = @sfb.divide(35)
    assert_equal "SuperBuzz", result
  end

  def test_it_returns_FizzBuzz_if_divisible_by_3_and_5
    result = @sfb.divide(15)
    assert_equal "FizzBuzz", result
  end

  def test_it_returns_SuperFizzBuzz_if_divisible_by_3_5_and_7
    result = @sfb.divide(105)
    assert_equal "SuperFizzBuzz", result
  end

  def test_it_returns_the_number_if_not_divisible_by_3_5_or_7
    result = @sfb.divide(1)
    assert_equal 1, result
  end
end
