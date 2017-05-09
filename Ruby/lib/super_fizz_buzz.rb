require 'pry-state'

class SuperFizzBuzz

  def divide(num)
    final_string = ""
    final_string = final_string  + "Super" if num % 7 == 0
    final_string = final_string  + "Fizz"  if num % 3 == 0
    final_string = final_string  + "Buzz"  if num % 5 == 0
    final_string = (final_string + "#{num}").to_i if invalid?(num)
    final_string
  end

  def invalid?(num)
    return true if num % 3 != 0 && num % 5 != 0 && num % 7 != 0
  end

end
