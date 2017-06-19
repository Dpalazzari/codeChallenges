from IPython import embed

class Bubble:

  def sort(self, arr):
    for num in range(len(arr)-1, 0 ,-1):
      for n in range(num):
        if arr[n] > arr[n+1]:
          arr[n] , arr[n+1] = arr[n+1], arr[n]
    return arr