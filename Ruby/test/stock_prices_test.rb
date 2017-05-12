require 'minitest/autorun'
require 'minitest/emoji'
require './lib/stock_prices'

class StockPricesTest < Minitest::Test

  def setup
    @stock = StockPrices.new
  end

  def test_it_exists
    assert @stock
  end

  def test_it_returns_the_greatest_gain_through_the_day
    arr = [10, 7, 5, 8, 11, 9]
    result = @stock.get_best_profit(arr)
    assert_equal 6, result
  end

  def test_it_returns_the_greatest_gain_through_the_day_v2
    arr = [1,2,3,4,5,6,7,8,9,10]
    result = @stock.get_best_profit(arr)
    assert_equal 9, result
  end

  def test_it_returns_the_greatest_gain_through_the_day_v3
    arr = [15, 13, 4, 7, 6, 9]
    result = @stock.get_best_profit(arr)
    assert_equal 5, result
  end

  def test_it_returns_the_smallest_loss_if_there_is_no_gain
    arr = [15, 13, 9, 7, 6, 4]
    result = @stock.get_best_profit(arr)
    assert_equal -1, result
  end

  def test_it_returns_the_smallest_loss_if_there_is_no_gain_v2
    arr = [10,9,8,7,6,5,4,3,2,1]
    result = @stock.get_best_profit(arr)
    assert_equal -1, result
  end

end
