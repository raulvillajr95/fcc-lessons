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
# import urllib.request, urllib.parse

# url = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
# data = urllib.parse('http://data.pr4e.org/romeo.txt')
# print(data)