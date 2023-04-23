question = """
Question 4
Consider a directed graph in which every edge has length 1. Suppose we run the Floyd-Warshall algorithm with the following modification: instead of using the recurrence A[i,j,k] = min{A[i,j,k-1], A[i,k,k-1] + A[k,j,k-1]}, we use the recurrence A[i,j,k] = A[i,j,k-1] + A[i,k,k-1] * A[k,j,k-1]. For the base case, set A[i,j,0] = 1 if (i,j) is an edge and 0 otherwise. What does this modified algorithm compute -- specifically, what is A[i,j,n] at the conclusion of the algorithm?

1 point

None of the other answers are correct.


The number of shortest paths from 
�
i to 
�
j.


The length of a longest path from 
�
i to 
�
j.


The number of simple (i.e., cycle-free) paths from 
�
i to 
�
j.
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

