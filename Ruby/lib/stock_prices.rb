require 'pry-state'

class StockPrices

  def get_best_profit(arr)
    return get_smallest_loss(arr) if arr[-1] == arr.min
    return get_greatest_gain(arr, arr.min)
  end

  def get_greatest_gain(arr, minimum, gains = [])
    arr.each_with_index do |num, index|
      if num == minimum
        until (index + 1 >= arr.length)
          gains.push(arr[index + 1])
          index += 1
        end
        return gains.max - minimum
      end
    end
  end

  def get_smallest_loss(arr, gains = [])
    arr.each_with_index do |num, index|
      gains << arr[index + 1] - arr[index] if arr[index + 1]
    end
    gains.max
  end

end
