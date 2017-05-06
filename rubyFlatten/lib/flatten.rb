require 'pry-state'

class Flatten

# subject to further refactoring

  def condense_array(arr, final_array = [])
    arr.each do |element|
      if element.class == Array
        construct_array(element, final_array)
      else
        final_array << element
      end
    end
    final_array
  end

  def construct_array(element, final_array)
    element.each do |el|
      if el.class == Array
        condense_array(el, final_array)
      else
        final_array << el
      end
    end
  end

end
