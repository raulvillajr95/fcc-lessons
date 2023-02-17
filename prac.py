# Main answer
# import re
# file = open('regex_sum_1689714.txt')
# total = 0
# for line in file:
#     line = line.rstrip()
#     if re.findall(r'[0-9]+', line):
#         numList = re.findall(r'[0-9]+', line)
#         for number in numList:
#           total += int(number)
# print(total)
# 261594

import re
# numers = 0
# print(for i in ['3', '2']: int(i))
# print(list(filter( lambda x: x == '976' ,re.findall('[0-9]+', open('regex_sum_1689714.txt').read()))))
# lambda x: for i in ['s']: int(i)
# for i in ['a', 'b']: print(int(i))
# print(fruit) for fruit in ['Apple', 'Mango']
# print(sum(list(map(lambda x: int(x),re.findall('[0-9]+', open('regex_sum_1689714.txt').read())))))
print(sum(list(map(lambda x: int(x), re.findall('[0-9]+', open('regex_sum_1689714.txt').read())))))