numbers = [34.6, -203.4, 44.9, 68.3, -12.2, 44.6, 12.7]
newlist = []

for num in numbers:
  newlist.append(int(abs(num)))

print(newlist)