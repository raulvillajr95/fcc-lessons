import re

find_members = []

for member in dir(re):
  if re.findall('find', member):
    find_members.append(member)

find_members.sort()
print(find_members)
