question = """
Question 7
Consider an alphabet with five letters, 
{
�
,
�
,
�
,
�
,
�
}
{a,b,c,d,e}, and suppose we know the frequencies 
�
�
=
0.28
f 
a
​
 =0.28, 
�
�
=
0.27
f 
b
​
 =0.27, 
�
�
=
0.2
f 
c
​
 =0.2, 
�
�
=
0.15
f 
d
​
 =0.15, and 
�
�
=
0.1
f 
e
​
 =0.1. What is the expected number of bits used by Huffman's coding scheme to encode a 1000-letter document?

1 point

2450
2520
2230
2250
"""

solution = ""

for line in question.split('\n'):
    if line == "�" or line == "\n" or line.isspace():
        continue
    solution += line + '\n'

print(solution)

# import urllib.request, urllib.parse, urllib.error
# from bs4 import BeautifulSoup
# import ssl

# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE

# url = input('Enter - ')
# html = urllib.request.urlopen(url, context=ctx).read()
# soup = BeautifulSoup(html, 'html.parser')

# tags = soup('a')
# for tag in tags:
#     print(tag.get('href', None))

# class PartyAnimal:
#     x = 0

#     def __init__(self):
#         print('I am constructed')

#     def party(self):
#         self.x = self.x + 1
#         print("So far", self.x)
    
#     def __del__(self):
#         print('I am desctructed', self.x)

# an = PartyAnimal()
# an.party()
# an.party()
# an = 42
# print('an contains', an)