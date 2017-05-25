require 'pry-state'
class ReverseString

  def easy_method(string)
    string.reverse
    # string.split(//).reverse.join
  end

  def hard_method(string)
    arr = string.chars
    final_string = []
    until arr.length.eql?(0)
      final_string.push(arr.pop)
    end
    final_string.join
  end

end
