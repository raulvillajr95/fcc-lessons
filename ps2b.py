###
### template of code for Problem 4 of Problem Set 2, Fall 2008
###

# bestSoFar = 0     # variable that keeps track of largest number
                  # of McNuggets that cannot be bought in exact quantity
packages = (6,9,20)   # variable that contains package sizes

# for n in range(1, 150):   # only search for solutions up to size 150
    ## complete code here to find largest size that cannot be bought
    ## when done, your answer should be bound to bestSoFar

x = True
n = 1
a = packages[0]
b = packages[1]
c = packages[2]

countNotFound = 0
consecutiveFound = 0
while (x):
  foundCoeff = False
  for i in range(0, n):
    for j in range(0, n):
      for k in range(0, n):
        if ((i*a + j*b + k*c) == n):
          consecutiveFound += 1
        #   print(n, "= " + str(a) + "(" + str(i) + ") + " + str(b) + "(" + str(j) + ") + " + str(c) + "(" + str(k) + ")", "ConsecF:", consecutiveFound)
          foundCoeff = True
          break
  if (consecutiveFound >= a and foundCoeff == False):
    print("Given package sizes " + str(a) + ", " + str(b) + ", and " + str(c) + ", the largest number of McNuggets that\ncannot be bought in exact quantity is:", n)
    break
  if (foundCoeff == False):
    countNotFound += 1
    consecutiveFound = 0
    # print(n, "was not possible", countNotFound)
  n += 1