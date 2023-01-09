# 10.1
# fname = input('Enter a file name: ')
# file = open(fname)
# addresses = dict()
# for line in file:
#   lsplit = line.split()
#   if len(lsplit) <= 0: continue
#   if lsplit[0] != 'From': continue
#   addresses[lsplit[1]] = addresses.get(lsplit[1], 0) + 1
# print(addresses)
# lst = list()
# for k, v in addresses.items():
#   lst.append((v,k))
# revSorted = sorted(lst, reverse=True)
# x, y = revSorted[0]
# print(y, x)

# 10.2
# fname = input('Enter a file name: ')
# file = open(fname)
# times = dict()
# for line in file:
#   lsplit = line.split()
#   if len(lsplit) <= 0: continue
#   if lsplit[0] != 'From': continue
#   time = lsplit[-2].split(':')[0]
#   times[time] = times.get(time, 0) + 1
# print(times)
# lst = list()
# for k, v in times.items():
#   lst.append((k, v))
# print(sorted(lst))
# for k, v in lst:
#   print(k, v)

# 10.3
#fname = input('Enter a file name: ')
# file = open(fname)
# times = dict()
# for line in file:
#   for letter in line:
#     if letter.isalpha() == False: continue
#     lower_letter = letter.lower()
#     times[lower_letter] = times.get(lower_letter, 0) + 1
# lst = list()
# for k, v in times.items():
#   # print(k, v)
#   lst.append((v, k))
# print(sorted(lst, reverse=True))

# eng: e, t, o
# fren: e, t, s
# span: e, a, s
# Germ: e, n, i
# Lorem: e, i, s