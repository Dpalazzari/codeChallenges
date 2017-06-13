require 'pry-state'

class Bubble

  def sort(arr)
    index_count = arr.length
    loop do
      swapped = false
      (index_count-1).times do |i|
        if arr[i] > arr[i+1]
          arr[i], arr[i+1] = arr[i+1], arr[i]
          swapped = true
        end
      end
      break if not swapped
    end
    arr
  end

end