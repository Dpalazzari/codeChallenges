from IPython import embed

class Fibonacci:

  def sequence(self, num):
    if num <= 2:
      return [0 ,1]
    else:
      fib_seq = self.sequence(num-1)
      next_fib_num = fib_seq[-1] + fib_seq[-2]
      fib_seq.append(next_fib_num)
      return fib_seq