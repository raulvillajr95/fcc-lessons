# Problem Set 1
# Name: Raul Villalobos

# a)
# x = 3
# primeCount = 1
# while (primeCount < 1000):

#   # Check if Prime
#   start = 3
#   foundPrime = True
#   while (start < x):
#     if(x % start == 0):
#       foundPrime = False
#       break
#     else:
#       start += 2
#   if (foundPrime):
#     primeCount += 1
#   x += 2

# Result
# print("The 1000th prime:", x)

# b)
import math

n = 7
i = 0
sumOfPrimes = math.log(2)
sumOfPrimes1 = 3
x = 3
primeCount = 1

while (x < n):
  # Check if Prime
  print("ran   ")
  start = 3
  foundPrime = True
  while (start < x):
    if(x % start == 0):
      foundPrime = False
      break
    else:
      start += 2
  if (foundPrime):
    primeCount += 1
    sumOfPrimes += math.log(x)
  x += 2
  i += 1

# Result
print(sumOfPrimes/n)
