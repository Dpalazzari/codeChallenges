require 'minitest/autorun'
require 'minitest/emoji'
require './lib/reverse_string'

class ReverseStringTest < Minitest::Test

  def setup
    @reverse = ReverseString.new
  end

  def test_it_exists
    assert @reverse
  end

  def test_it_reverses_a_string
    phrase = 'babooshka'
    result = @reverse.easy_method(phrase)
    assert_equal 'akhsoobab', result
  end

end
