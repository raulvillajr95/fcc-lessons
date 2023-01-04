# 9.1
# fname = input('Enter file name: ')
# fhandle = open(fname)
# wordKeys = dict()
# for line in fhandle:
#   for word in line.split():
#     if word not in wordKeys:
#       wordKeys[word] = 1
#     else:
#       wordKeys[word] = wordKeys[word] + 1
# print(wordKeys)

# 9.2
# fname = input('Enter file name: ')
# fhandle = open(fname)
# day_count = dict()
# for line in fhandle:
#   sline = line.split()
#   if len(sline) < 3: continue
#   if sline[0] != 'From': continue
#   day_count[sline[2]] = day_count.get(sline[2], 0) + 1
# print(day_count)

# 9.3
# fname = input('Enter file name: ')
# fhandle = open(fname)
# day_count = dict()
# for line in fhandle:
#   sline = line.split()
#   if len(sline) < 3: continue
#   if sline[0] != 'From': continue
#   day_count[sline[1]] = day_count.get(sline[1], 0) + 1
# print(day_count)

# 9.4
fname = input('Enter file name: ')
fhandle = open(fname)
email_count = dict()
for line in fhandle:
  sline = line.split()
  if len(sline) < 3: continue
  if sline[0] != 'From': continue
  email_count[sline[1]] = email_count.get(sline[1], 0) + 1
email_max_count = -1
email_max_name = ''
for email in email_count:
  if email_count[email] > email_max_count:
    email_max_count = email_count[email]
    email_max_name = email
print(email_max_name, email_max_count)

# 9.5
# fname = input('Enter file name: ')
# fhandle = open(fname)
# domain_count = dict()
# for line in fhandle:
#   sline = line.split()
#   if len(sline) < 3: continue
#   if sline[0] != 'From': continue
#   domain = sline[1].split('@')[1]
#   domain_count[domain] = domain_count.get(domain, 0) + 1
# print(domain_count)