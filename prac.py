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

def countSubStringMatchRecursive(target, key):

  # print("CALL")
  # totalFound = 0
  targetOne = target[target.find(key,0)+1:]
  print("Ran", key, targetOne, target.find(key,0))

  if(target.find(key,0) == -1):
    print("NEGATIVE ONE")
    return 0
  else:
    return 1 + countSubStringMatchRecursive(targetOne, key)

print(countSubStringMatchRecursive(example, ex))