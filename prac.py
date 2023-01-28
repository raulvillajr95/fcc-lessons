import re

m = re.match(r"(?P<first_name>\w+) (?P<last_name>\w+)", "Isaac Newton, physicist")
print(m['first_name'])
print(m['last_name'])