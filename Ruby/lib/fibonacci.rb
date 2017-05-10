require 'pry-state'
class Fibonacci

  def sequence(num)
    fib_array = [0, 1]
    fib_array if fib_array.length == num
    fib_array = construct_sequence(num, fib_array)
    fib_array
  end

  def construct_sequence(num, fibonacci)
    (num - 2).times do
      fibonacci.push(fibonacci[-2] + fibonacci[-1])
    end
    fibonacci
  end

end
