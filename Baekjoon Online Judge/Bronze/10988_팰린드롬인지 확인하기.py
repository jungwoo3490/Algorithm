str = input()

length = len(str)
result = 1

for i in range(int(length/2)):
    if str[i] != str[length-(i+1)]:
        result = 0
        break

print(result)