from IPython import embed

class Fibonacci:

  def sequence(self, num):
    if num <= 2: return [0 ,1]
    else: return self.fib_seq_greater_then_two(num)

  def fib_seq_greater_then_two(self, num):
    fib_seq = self.sequence(num-1)
    fib_seq.append(fib_seq[-1] + fib_seq[-2])
    return fib_seq