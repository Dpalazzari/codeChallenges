from itertools import chain

class BasicStack(object):
  
  def push_to_array(self, arr, num):
    return list(chain.from_iterable([arr, [num]]))
    
  def push_to_array_with_append(self, arr, num):
    arr.append(num)
    return arr