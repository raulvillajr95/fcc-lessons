import re

def displaymatch(match):
    if match is None:
        return None
    return '<Match: %r, groups=%r>' % (match.group(), match.groups())

pair = re.compile(r".*(.).*\1")
print(displaymatch(pair.match("717ak").group(1)))
print(displaymatch(pair.match("718ak").group(1)))
print(displaymatch(pair.match("354aa").group(1)))
