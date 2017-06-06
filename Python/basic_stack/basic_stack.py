from itertools import chain

class BasicStack(object):
  
  def push_to_array(self, arr, num):
    return list(chain.from_iterable([arr, [num]]))
    
  def push_to_array_with_append(self, arr, num):
    arr.append(num)
    return arr

  def remove_last_element(self, arr):
    arr = arr[0:-1]
    return arr

  def remove_last_element_with_pop(self, arr):
    arr.pop()
    return arr

  def count_elements_in_list(self, arr):
    count = 0
    for index in arr:
      count += 1
    return count

  def count_elements_in_list_with_len(self, arr):
    return len(arr)