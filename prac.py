# Problem Set 2
# Name: Raul Villalobos

# 1) *done on miro whiteboard
# 2) This theorem is true because the 6, 9, and 20 pieces offer a perfect set of remainders. As an example we
#    have 10, 11, 12, 13, 14, 15, sets of McNuggets, adding a box of 6 pieces can get you from 16 to 21 and a piece can get you
#    from 19 to 24. Then to get to 25, we can add a 6 piece and 9 piece to the 10. Those 2 sets have a full
#    range of numbers from 16 to 25 which add 1 to 10 to the original 10-15.

# 3)
import math

x = True
n = 1
a = 6
b = 9
c = 20

countNotFound = 0
consecutiveFound = 0
while (x):
  foundCoeff = False
  for i in range(0, n):
    for j in range(0, n):
      for k in range(0, n):
        if ((i*a + j*b + k*c) == n):
          consecutiveFound += 1
          print(n, "= " + str(a) + "(" + str(i) + ") + " + str(b) + "(" + str(j) + ") + " + str(c) + "(" + str(k) + ")", "ConsecF:", consecutiveFound)
          foundCoeff = True
          break
  if (consecutiveFound >= a and foundCoeff == False):
    print("Largest number of McNuggets that cannot be bought in exact quantity:", n)
    break
  if (foundCoeff == False):
    countNotFound += 1
    consecutiveFound = 0
    print(n, "was not possible", countNotFound)
  n += 1
  
# 4)
