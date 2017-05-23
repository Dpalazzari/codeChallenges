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

  def test_it_reverses_a_phrase_with_multiple_words
    phrase = 'super babooshka'
    result = @reverse.easy_method(phrase)
    assert_equal 'akhsoobab repus', result
  end

  def test_it_reverses_a_string_with_special_characters
    phrase = 'super babooshka!'
    result = @reverse.easy_method(phrase)
    assert_equal '!akhsoobab repus', result
  end

end
