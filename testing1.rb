def get_sum(array)
  size = array.length
  if size == 1
    return array[0]
  else
    return (array[0] + get_sum(array[1...size]))
  end
end
puts get_sum([1,2,3])