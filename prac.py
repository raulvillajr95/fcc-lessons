def clique(n):
    print("in a clique...")
    for j in range(n):
        for i in range(j):
            print(i, "is friends with", j)
clique(4)

# not: 1, 2, 4, 7, 11
# 7 + 1 + 4
