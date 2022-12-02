def average(total, count):
  return total/count

total = 0
count = 0
while True:
  inp = input('Enter a number: ')
  if inp == 'done':
    break
  try:
    num = float(inp)
  except:
    print('Invalid input')
    continue
  total = total + num
  count = count + 1

print(total, count, average(total, count))