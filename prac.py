# Problem Set 3 (Part I)
# Name: Raul Villalobos

from string import *

example = "atgacatgcacaagtatgcat"
ex = "atgc"

# def countSubStringMatch(target, key):

#   found = 0
#   totalFound = 0
#   while (found != -1):
#     found = target.find(key, found)
#     if found != -1:
#       found += 1
#       totalFound += 1
#   return totalFound

# print(countSubStringMatch(example, ex))



# print(example[example.find(ex,0)+1:])

# def countSubStringMatchRecursive(target, key):

#   targetOne = target[target.find(key,0)+1:]

#   if(target.find(key,0) == -1):
#     return 0
#   else:
#     return 1 + countSubStringMatchRecursive(targetOne, key)

# print(countSubStringMatchRecursive(example, ex))

def newtonsMethod(n, iterations):
  start = n/2.0
  result = 0.0

  for i in range(0,iterations):
    start = 0.5 * (start + 3/start)

  return start

print(newtonsMethod(3, 10))