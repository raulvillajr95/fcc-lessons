def fibonacci(n, arr = [0, 1]):
    result = 0
    if (n <= 2):
        result = arr[n-1]
    else:
        arr.append(arr[len(arr) - 2] + arr[len(arr) - 1])
        result = fibonacci(n-1, arr) + arr[n - 3]

    return result

# Calling the function
for i in range(10):
    print(i+1, fibonacci(i+1))
