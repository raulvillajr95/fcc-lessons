def fibonacci(n):
  if(n == 1):
    return 0
  elif (n == 2):
    return 1
  else:
    return fibonacci(n-1) + fibonacci(n-2)


for n in range(0,10):
  # print(n)
  print(fibonacci(n+1))

# print(fibonacci(1))