# exercises

guess_count = 0

correct_pass = 'dee234'

while True:
  pass_guess = input("Please enter your password: ")

  guess_count += 1

  if pass_guess == correct_pass:
    print ('You have successfully logged in.')
    break

  elif pass_guess != correct_pass:
    if guess_count >= 3:
      print ("You have been denied access.")
      break