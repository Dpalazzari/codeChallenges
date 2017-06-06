class SuperFizzBuzz:

  def sequence(self, num):
    final_string = ""
    if num % 7 == 0:
      final_string = final_string + "Super"
    if num % 3 == 0:
      final_string = final_string + "Fizz"
    if num % 5 == 0:
      final_string = final_string + "Buzz"
    if num % 7 != 0 and num % 3 != 0 and num % 5 != 0:
      final_string = num
    return final_string