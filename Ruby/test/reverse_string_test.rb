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

end
