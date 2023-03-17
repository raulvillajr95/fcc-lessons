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

from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
html = urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, "html.parser")

# Retrieve all of the anchor tags
spans = soup('span')
count = 0
for span in spans:
    # Look at the parts of a tag
    # print('SPAN:', span)
    # print('Contents:', span.contents[0])
    count = count + int(span.contents[0])
#     print('Attrs:', tag.attrs)
print(count)

