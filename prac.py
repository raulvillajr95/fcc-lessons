# 4. d
# 5. d

# 6.
def computepay(hours, rate):
  hr = float(hours)
  rt = float(rate)

  if hr <= 40:
    return hr * rt
  elif hr > 40:
    ex = hr - 40
    return ex * (1.5 * rt) + 40 * rt
#print("Pay",computepay(input('Enter Hours: '), input('Enter Rate: ')))

# 7.
def computegrade(score):
  try:
    sc = float(score)

    if sc > 1.0:
      return "Bad score"
    elif sc >= 0.9:
      return "A"
    elif sc >= 0.8:
      return "B"
    elif sc >= 0.7:
      return "C"
    elif sc >= 0.6:
      return "D"
    elif sc >= 0.0:
      return "F"
    else:
      return "Bad score"
  except:
    return "Bad score"
#print(computegrade(input('Enter score: ')))