import re

def vowels(srr):
    return len(re.findall(r"[aeiou]", srr))

print(vowels("aeirou"))
