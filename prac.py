import math

repeat = True

while repeat:
  x = input("Input value within 0 and π/2 (1.570796): ")
  sinxCosx = math.sin(float(x)) + math.cos(float(x))
  result = "sin(" + x + ") + cos(" + x + ") = " + f'{sinxCosx:.6f}'
  print(result)
  choice = input("Try again? (Y/N): ")
  if (choice.upper() == "Y"):
    continue
  else:
    repeat = False
