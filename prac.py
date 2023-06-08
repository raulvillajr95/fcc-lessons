def naive(a, b):
    z = 0
    while a > 0:
        z += b
        a -= 1
    return z

# print(naive(2**23,2**23))
print((2**30) * (2**30))
