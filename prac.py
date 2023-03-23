# Exercise 1
# import socket
# url = input('Enter URL: ')
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# # mysock.connect(('data.pr4e.org', 80))
# try:
#     mysock.connect((url.split('/')[2], 80))
# except:
#     print('Enter a valid url')
#     quit()
# # cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
# cmd = b'GET %s HTTP/1.0\r\n\r\n' % (url).encode()
# print(cmd, 'cmd')
# mysock.send(cmd)
# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     print(data.decode(),end='')
# mysock.close()

# Exercise 2
# import socket
# url = input('Enter URL: ')
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# # mysock.connect(('data.pr4e.org', 80))
# try:
#     mysock.connect((url.split('/')[2], 80))
# except:
#     print('Enter a valid url')
#     quit()
# # cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
# cmd = b'GET %s HTTP/1.0\r\n\r\n' % (url).encode()
# mysock.send(cmd)
# text = ''
# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     text = text + data.decode()
# print(''.join([*text][0:3000]))
# print("Total characters:",len(text))
# mysock.close()

# Exercise 3
# import urllib.request, urllib.parse, urllib.error

# inp = input('Enter URL: ')
# url = urllib.request.urlopen(inp).read()
# # data = urllib.parse('http://data.pr4e.org/romeo.txt')
# text = url.decode()
# print(''.join([*text][0:3000]))
# print('Total characters:', len(text))

# Exercise 4
# import urllib.request, urllib.parse, urllib.error
# from bs4 import BeautifulSoup
# import ssl
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE
# url = input('Enter - ')
# html = urllib.request.urlopen(url, context=ctx).read()
# soup = BeautifulSoup(html, 'html.parser')
# count = 0
# ptags = soup('p')
# for tag in ptags:
#     count = count + 1
# print(count)

# Exercise 5
# import socket
# url = input('Enter URL: ')
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# try:
#     mysock.connect((url.split('/')[2], 80))
# except:
#     print('Enter a valid url')
#     quit()
# cmd = b'GET %s HTTP/1.0\r\n\r\n' % (url).encode()
# mysock.send(cmd)
# text = ''
# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     text = text + data.decode()
# mysock.close()
# beyond_headers = ''.join(text.split('\r\n\r\n')[1:])
# print(beyond_headers, end='')




# Eulerian Tour Ver 1
#
# Write a function, `create_tour` that takes as
# input a list of nodes
# and outputs a list of tuples representing
# edges between nodes that have an Eulerian tour.
#

def create_tour(nodes):
    # your code here
    return []

#########

def get_degree(tour):
    degree = {}
    for x, y in tour:
        degree[x] = degree.get(x, 0) + 1
        degree[y] = degree.get(y, 0) + 1
    return degree

def check_edge(t, b, nodes):
    """
    t: tuple representing an edge
    b: origin node
    nodes: set of nodes already visited

    if we can get to a new node from `b` following `t`
    then return that node, else return None
    """
    if t[0] == b:
        if t[1] not in nodes:
            return t[1]
    elif t[1] == b:
        if t[0] not in nodes:
            return t[0]
    return None

def connected_nodes(tour):
    """return the set of nodes reachable from
    the first node in `tour`"""
    a = tour[0][0]
    nodes = set([a])
    explore = set([a])
    while len(explore) > 0:
        # see what other nodes we can reach
        b = explore.pop()
        for t in tour:
            node = check_edge(t, b, nodes)
            if node is None:
                continue
            nodes.add(node)
            explore.add(node)
    return nodes

def is_eulerian_tour(nodes, tour):
    # all nodes must be even degree
    # and every node must be in graph
    degree = get_degree(tour)
    for node in nodes:
        try:
            d = degree[node]
            if d % 2 == 1:
                print ("Node %s has odd degree") % node
                return False
        except KeyError:
            print ("Node %s was not in your tour") % node
            return False
    connected = connected_nodes(tour)
    if len(connected) == len(nodes):
        return True
    else:
        print("Your graph wasn't connected")
        return False

def test():
    nodes = [20, 21, 22, 23, 24, 25]
    tour = create_tour(nodes)
    return is_eulerian_tour(nodes, tour)
