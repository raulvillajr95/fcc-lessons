dice = {"a": 1}
print(dice["b"])

def odd(num):
    dic = {}
    for i in range(len(num)):
        if dic[num[i]]:
            dic[num[i]] += 1
        else:
            dic[num[i]] = 1
    return dic
# print(odd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
