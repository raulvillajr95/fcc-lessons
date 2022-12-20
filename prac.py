# 7.1
# fname = input('Enter a file name: ')
# file = open(fname)
# for line in file:
#   print(line.upper())

# 7.2
# fname = input('Enter a file name: ')
# file = open(fname)
# count = 0
# total = 0
# for line in file:
#   lstripped = line.rstrip()
#   if lstripped.startswith('X-DSPAM-Confidence:'):
#     count = count + 1
#     spaceIndex = lstripped.index(' ')
#     floatNum = lstripped[spaceIndex:]
#     total = total + float(floatNum)
# print(total/count)

#7.3
# fname = input('Enter a file name: ')
# if fname == 'na na boo boo':
#   print("NA NA BOO BOO TO YOU - You have been punk'd!")
#   exit()
# try:
#   file = open(fname)
#   count = 0
#   for line in file:
#     count = count + 1
#   print(count)
# except:
#   print('File cannot be opened:', fname)