require 'pry-state'

class StockPrices

  def get_best_profit(arr)
    return get_smallest_loss(arr) if arr[-1] == arr.min
    return get_greatest_gain(arr, arr.min)
  end

  def get_greatest_gain(arr, minimum)
    arr.each_with_index do |num, index|
      return find_gains(arr, index, minimum) if num == minimum
    end
  end

  def find_gains(arr, index, minimum, gains = [])
    until (index + 1 >= arr.length)
      gains.push(arr[index + 1])
      index += 1
    end
    gains.max - minimum
  end

  def get_smallest_loss(arr, gains = [])
    arr.each_with_index do |num, index|
      gains << arr[index + 1] - arr[index] if arr[index + 1]
    end
    gains.max
  end

end
