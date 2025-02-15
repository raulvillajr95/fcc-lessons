# fill in this function
def fib():
  a = 1
  b = 1

  for i in range(10):
    yield a
    yield b
    a = a+b
    b = a+b
######
import random

def lottery():
  # returns 6 numbers between 1 and 40
  for i in range(6):
    yield random.randint(1, 40)
  
  yield random.randint(1, 15)

for random_number in lottery():
  print("And the next number is... %d!" %(random_number))
######

# testing code
import types
if type(fib()) == types.GeneratorType:
  print("Good, The fib function is a generator.")

  counter = 0
  for n in fib():
    print(n)
    counter += 1
    if counter == 10:
      break