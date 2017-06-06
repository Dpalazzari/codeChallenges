from itertools import chain

class BasicStack(object):
  
  def push_to_array(self, arr, num):
    return list(chain.from_iterable([arr, [num]]))
    