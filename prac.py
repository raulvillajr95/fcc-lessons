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

# Ex: 6.5
text = "X-DSPAM-Confidence:    0.8475"
beforeFloat = text.find(' ')
afterFloat = text.find(' ', beforeFloat+1)
floatStr = float(text[beforeFloat+1:])
print(floatStr)

#Ex: 6.6
# str = "www.google.com"
# modified = str.zfill(20)
# print(modified)

'From marquard@uct.ac.za'