question = """
Question 2
Consider the following optimization to the Bellman-Ford algorithm.  Given a graph 
�
=
(
�
,
�
)
G=(V,E) with real-valued edge lengths, we label the vertices 
�
=
{
1
,
2
,
3
,
…
,
�
}
V={1,2,3,…,n}.  The source vertex 
�
s should be labeled "1", but the rest of the labeling can be arbitrary.  Call an edge 
(
�
,
�
)
∈
�
(u,v)∈E forward if 
�
<
�
u<v and backward if 
�
>
�
u>v.  In every odd iteration of the outer loop (i.e., when 
�
=
1
,
3
,
5
,
.
.
.
i=1,3,5,...), we visit the vertices in the order from 1 to 
�
n.  In every even iteration of the outer loop (when 
�
=
2
,
4
,
6
,
.
.
.
i=2,4,6,...), we visit the vertices in the order from 
�
n to 1.  In every odd iteration, we update the value of 
�
[
�
,
�
]
A[i,v] using only the forward edges of the form 
(
�
,
�
)
(w,v), using the most recent subproblem value for 
�
w (that from the current iteration rather than the previous one).   That is, we compute 
�
[
�
,
�
]
=
min
⁡
{
�
[
�
−
1
,
�
]
,
min
⁡
(
�
,
�
)
�
[
�
,
�
]
+
�
�
�
}
A[i,v]=min{A[i−1,v],min 
(w,v)
​
 A[i,w]+c 
wv
​
 }, where the inner minimum ranges only over forward edges sticking into 
�
v (i.e., with 
�
<
�
w<v).  Note that all relevant subproblems from the current round (
�
[
�
,
�
]
A[i,w] for all 
�
<
�
w<v with 
(
�
,
�
)
∈
�
(w,v)∈E) are available for constant-time lookup.  In even iterations, we compute this same recurrence using only the backward edges (again, all relevant subproblems from the current round are available for constant-time lookup).  Which of the following is true about this modified Bellman-Ford algorithm?

1 point

It correctly computes shortest paths if and only if the input graph has no negative-cost cycle.


It correctly computes shortest paths if and only if the input graph has no negative edges.


It correctly computes shortest paths if and only if the input graph is a directed acyclic graph.


This algorithm has an asymptotically superior running time to the original Bellman-Ford algorithm.
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

