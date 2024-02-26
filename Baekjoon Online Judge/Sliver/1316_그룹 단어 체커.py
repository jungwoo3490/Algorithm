n = int(input())
arr = []
count = 0

for i in range(n):
    word = input()
    arr.append(word)

for i in range(n):
    mem = []
    flag = 1
    for j in range(len(arr[i])):
        if arr[i][j] not in mem:
            mem.append(arr[i][j])
        else:
            if arr[i][j] == arr[i][j-1]:
                continue
            else:
                flag = 0
                break
    if flag == 1:
        count += 1

print(count)