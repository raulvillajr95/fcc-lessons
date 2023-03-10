import socket

url = input('Enter URL: ')
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mysock.connect(('data.pr4e.org', 80))
try:
    mysock.connect((url.split('/')[2], 80))
except:
    print('Enter a valid url')
    quit()
# cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
cmd = b'GET %s HTTP/1.0\r\n\r\n' % (url).encode()
print(cmd, 'cmd')
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')

mysock.close()

# url = input('Enter URL: ')
# print('GET %s HTTP/1.0\r\n\r\n' % (url))