require 'pry-state'

class Bubble

  def sort(arr)
    index_count = arr.length - 1
    (index_count).times do
      arr.each_index do |index|
        if arr[index] > arr[index+1]
          arr[index], arr[index+1] = arr[index+1], arr[index]
        end
      end
    end
  end

end