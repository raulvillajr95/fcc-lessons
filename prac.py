import re

pattern = re.compile('o[gh]')
print(pattern.fullmatch('dog'))
print(pattern.fullmatch('ogre'))
print(pattern.fullmatch('doggie', 1, 3))