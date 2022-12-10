# Ex: 6.1
# index = len(fruit) - 1
# while index >= 0:
#   letter = fruit[index]
#   print(letter, index)
#   index = index - 1

# Ex: 6.2
# The whole string

# Ex: 6.3
# def count(str, letter):
#   count = 0
#   for letterIter in str:
#     if letterIter == letter:
#       count = count + 1
#   print(count)

# Ex: 6.4
# word = 'banana'
# print(word.count('a'))

while True:
  line = input('> ')
  if len(line) > 0 and line[0] == '#':
    continue
  if line == 'done':
    break
  print(line)
print('Done!')