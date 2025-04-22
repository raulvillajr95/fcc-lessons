from random import SystemRandom

def multiples(integer, limit):
    lst = []

    for i in range(integer,limit + 1):
        if i % integer == 0:
            lst.append(i)
    return lst

# Generate random password
sr = SystemRandom()
def generate_password(length, valid_chars=None):
  if valid_chars==None:
    valid_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    valid_chars += valid_chars.lower() + "0123456789" + "'-!\"#$%&()*,./:;?@[]^_`{|}~+<=>"

  password = ""
  counter = 0
  while counter < length:
    rnum = sr.randint(0, 128)
    char = chr(rnum)
    if char in valid_chars:
      password += chr(rnum)
      counter += 1
  return password