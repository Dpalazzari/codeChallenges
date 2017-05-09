require 'pry-state'
class BasicStack

  def add_to_end(arr, num)
    [arr, num].flatten
  end

  def remove_top_element(arr)
    length  = count_num_elements(arr)
    element = arr[length-1]
    arr     = arr[0..(length-2)]
    [arr, element]
  end

  def count_num_elements(arr)
    element_count = 0
    arr.each { |n| element_count += 1 }
    element_count
  end

  def find_max(arr)
    max_value = 0
    arr.each { |num| max_value = num if num >= max_value }
    max_value
  end

end
