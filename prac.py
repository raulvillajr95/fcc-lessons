# # Exercise 1
# import urllib.request, urllib.parse, urllib.error
# import json
# import ssl
# api_key = False
# if api_key is False:
#     api_key = 42
#     serviceurl = 'http://py4e-data.dr-chuck.net/json?'
# else :
#     serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE
# while True:
#     address = input('Enter location: ')
#     if len(address) < 1: break
#     parms = dict()
#     parms['address'] = address
#     if api_key is not False: parms['key'] = api_key
#     url = serviceurl + urllib.parse.urlencode(parms)
#     print('Retrieving', url)
#     uh = urllib.request.urlopen(url, context=ctx)
#     data = uh.read().decode()
#     print('Retrieved', len(data), 'characters')
#     try:
#         js = json.loads(data)
#     except:
#         js = None
#     if not js or 'status' not in js or js['status'] != 'OK':
#         print('==== Failure To Retrieve ====')
#         print(data)
#         continue
#     print(json.dumps(js, indent=4))
#     lat = js['results'][0]['geometry']['location']['lat']
#     lng = js['results'][0]['geometry']['location']['lng']
#     print('lat', lat, 'lng', lng)
#     location = js['results'][0]['formatted_address']
#     print(location)
#     try:
#         country_code = js['results'][0]['address_components'][3]['short_name']
#         print(country_code)
#     except:
#         print('Not a country') 

# import urllib.request, urllib.parse, urllib.error
# import json
# import ssl
# api_key = False
# if api_key is False:
#     api_key = 42
#     serviceurl = 'http://py4e-data.dr-chuck.net/json?'
# else :
#     serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE
# while True:
#     address = input('Enter location: ')
#     if len(address) < 1: break
#     parms = dict()
#     parms['address'] = address
#     if api_key is not False: parms['key'] = api_key
#     url = serviceurl + urllib.parse.urlencode(parms)
#     print('Retrieving', url)
#     uh = urllib.request.urlopen(url, context=ctx)
#     data = uh.read().decode()
#     print('Retrieved', len(data), 'characters')
#     try:
#         js = json.loads(data)
#     except:
#         js = None
#     if not js or 'status' not in js or js['status'] != 'OK':
#         print('==== Failure To Retrieve ====')
#         print(data)
#         continue
#     print(json.dumps(js, indent=4))
#     lat = js['results'][0]['geometry']['location']['lat']
#     lng = js['results'][0]['geometry']['location']['lng']
#     print('lat', lat, 'lng', lng)
#     location = js['results'][0]['formatted_address']
#     print(location)
#     try:
#         country_code = js['results'][0]['address_components'][3]['short_name']
#         print(country_code)
#     except:
#         print('Not a country')

import urllib.request, urllib.parse, urllib.error
import json
import ssl
    
serviceurl = 'http://py4e-data.dr-chuck.net/comments_1689719.json'

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = serviceurl
print('Retrieving', url)
uh = urllib.request.urlopen(url, context=ctx)
data = uh.read().decode()
print('Retrieved', len(data), 'characters')

try:
    js = json.loads(data)
except:
    js = None
    
if not js or 'status' not in js or js['status'] != 'OK':
    print('==== Failure To Retrieve ====')
    print(data)

print(json.dumps(js, indent=4))

count = 0
for comment in js['comments']:
    count += int(comment['count'])
print(count)